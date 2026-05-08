import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  dashboardInsights,
  dashboardNotifications,
  dailyRoutine,
  featuredSessions,
  liveClasses,
  recommendationTopics,
  sessionCatalog,
} from "../data/wellnessData";
import { loadProfileSetupState } from "../pages/profileSetupStorage";
import { useAuth } from "./AuthContext";

const DashboardContext = createContext(null);
const DASHBOARD_STATE_KEY = "yogawomans_dashboard_state";

const defaultDashboardState = {
  lastSessionId: featuredSessions[0].id,
  completedSessions: [],
  completedRoutine: [],
  favorites: [],
  liveJoined: [],
  meditationMinutes: 220,
  yogaSessionsCompleted: 18,
  streakDays: 6,
  wellnessScore: 84,
  notificationsRead: [],
  activePlan: "Basic",
  settings: {
    darkMode: false,
    notifications: true,
    language: "English",
    privateProfile: true,
  },
};

function buildRecommendationSeed(profile, dashboardState) {
  const goals = profile?.data?.goals || [];
  const completed = dashboardState.completedSessions.length;
  const pool = sessionCatalog.slice();

  const weightFor = (session) => {
    let score = 0;
    if (goals.some((goal) => session.tags?.some((tag) => goal.toLowerCase().includes(tag.toLowerCase())))) {
      score += 3;
    }
    if (session.level === "Gentle" && profile?.data?.stressLevel) score += 2;
    if (session.level === "Beginner" && completed < 5) score += 2;
    if (session.premium) score -= 0.5;
    return score;
  };

  return pool
    .map((session) => ({ ...session, recommendationScore: weightFor(session) }))
    .sort((a, b) => b.recommendationScore - a.recommendationScore);
}

export function DashboardProvider({ children }) {
  const auth = useAuth();
  const profile = loadProfileSetupState();
  const [state, setState] = useLocalStorage(DASHBOARD_STATE_KEY, defaultDashboardState, "localStorage");
  const [modalSession, setModalSession] = useState(null);
  const [meetingClass, setMeetingClass] = useState(null);

  useEffect(() => {
    if (!state.lastSessionId && featuredSessions.length) {
      setState((current) => ({ ...current, lastSessionId: featuredSessions[0].id }));
    }
  }, [state.lastSessionId, setState]);

  const lastSession = sessionCatalog.find((session) => session.id === state.lastSessionId) || sessionCatalog[0];

  const toggleFavorite = (session) => {
    setState((current) => {
      const exists = current.favorites.includes(session.id);
      return {
        ...current,
        favorites: exists
          ? current.favorites.filter((id) => id !== session.id)
          : [...current.favorites, session.id],
      };
    });
  };

  const openSession = (session) => {
    setState((current) => ({
      ...current,
      lastSessionId: session.id,
    }));
    setModalSession(session);
  };

  const markSessionCompleted = (sessionId, minutes = 0) => {
    setState((current) => {
      const completedSessions = current.completedSessions.includes(sessionId)
        ? current.completedSessions
        : [...current.completedSessions, sessionId];
      return {
        ...current,
        completedSessions,
        meditationMinutes: current.meditationMinutes + minutes,
        yogaSessionsCompleted: current.yogaSessionsCompleted + 1,
        streakDays: Math.min(current.streakDays + 1, 30),
        wellnessScore: Math.min(current.wellnessScore + 1, 100),
      };
    });
  };

  const completeRoutine = (routineId) => {
    setState((current) => ({
      ...current,
      completedRoutine: current.completedRoutine.includes(routineId)
        ? current.completedRoutine
        : [...current.completedRoutine, routineId],
      wellnessScore: Math.min(current.wellnessScore + 0.5, 100),
    }));
  };

  const joinClass = (liveClass) => {
    setState((current) => ({
      ...current,
      liveJoined: current.liveJoined.includes(liveClass.id)
        ? current.liveJoined
        : [...current.liveJoined, liveClass.id],
    }));
    setMeetingClass(liveClass);
  };

  const markNotificationRead = (id) => {
    setState((current) => ({
      ...current,
      notificationsRead: current.notificationsRead.includes(id)
        ? current.notificationsRead
        : [...current.notificationsRead, id],
    }));
  };

  const updateSetting = (key, value) => {
    setState((current) => ({
      ...current,
      settings: {
        ...current.settings,
        [key]: value,
      },
    }));
  };

  const upgradePlan = (planName) => {
    setState((current) => ({
      ...current,
      activePlan: planName,
    }));
  };

  const recommendations = useMemo(
    () => buildRecommendationSeed(profile, state).slice(0, 5),
    [profile, state]
  );

  const unreadNotifications = dashboardNotifications.filter(
    (item) => !state.notificationsRead.includes(item.id)
  );

  const value = useMemo(
    () => ({
      state,
      profile,
      auth,
      modalSession,
      meetingClass,
      lastSession,
      featuredSessions,
      dailyRoutine,
      liveClasses,
      dashboardInsights,
      notifications: unreadNotifications,
      recommendations,
      setModalSession,
      setMeetingClass,
      toggleFavorite,
      openSession,
      markSessionCompleted,
      completeRoutine,
      joinClass,
      markNotificationRead,
      updateSetting,
      upgradePlan,
    }),
    [state, profile, auth, modalSession, meetingClass, lastSession, recommendations, unreadNotifications]
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
}
