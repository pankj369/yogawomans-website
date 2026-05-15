import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiPlay } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import HeroBanner from "../components/dashboard/HeroBanner";
import FeaturedSlider from "../components/dashboard/FeaturedSlider";
import DailyRoutine from "../components/dashboard/DailyRoutine";
import RecommendedSection from "../components/dashboard/RecommendedSection";
import ProgressTracker from "../components/dashboard/ProgressTracker";
import LiveClasses from "../components/dashboard/LiveClasses";
import Footer from "../components/dashboard/Footer";
import { useAuth } from "../context/AuthContext";
import { useDashboard } from "../context/DashboardContext";
import { useToast } from "../context/ToastContext";
import { sessionCatalog, recommendationTopics } from "../data/wellnessData";

const sectionMeta = {
  home: { title: "Today feels lighter already", hero: "Morning sanctuary", focus: "All your wellness rituals in one place." },
  meditation: { title: "Meditation", hero: "Mindful stillness", focus: "Slow down and reset with guided calm." },
  sleep: { title: "Sleep", hero: "Night restoration", focus: "Wind down with soothing sessions and soundscapes." },
  music: { title: "Music", hero: "Sound healing", focus: "Find a rhythm that softens the nervous system." },
  wisdom: { title: "Wisdom", hero: "Spiritual insight", focus: "Reflect, learn, and deepen your practice." },
  movement: { title: "Movement", hero: "Daily motion", focus: "Build strength and flexibility with intention." },
  breathwork: { title: "Breathwork", hero: "Breath reset", focus: "Use the breath to energize or release tension." },
  kids: { title: "Kids Yoga", hero: "Family flow", focus: "Gentle movement for younger yogis." },
};

const topicRouteMap = {
  yoga: "movement",
  sleep: "sleep",
  healing: "wisdom",
  chakra: "wisdom",
  sound: "music",
  breath: "breathwork",
};

function SessionModal({ session, onClose, onPreview, onStart }) {
  if (!session) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] bg-black/45 px-4 py-8 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.98 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
      >
        <div className="relative h-64">
          <img src={session.image} alt={session.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(26,26,26,0.62)_100%)]" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-[#2c251d]"
          >
            <FiX />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs uppercase tracking-[0.24em] text-white/75">Session details</p>
            <h3 className="mt-2 text-3xl font-heading font-extrabold">{session.title}</h3>
            <p className="mt-1 text-sm text-white/85">with {session.instructor}</p>
          </div>
        </div>

        <div className="space-y-5 p-6">
          <p className="text-sm leading-7 text-[#5f5347]">{session.preview || session.description}</p>
          <div className="flex flex-wrap gap-2">
            {(session.tags || []).map((tag) => (
              <span key={tag} className="rounded-full bg-[#eff7ea] px-3 py-1.5 text-xs font-semibold text-[#2E7D32]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onPreview(session)}
              className="rounded-full border border-[#2E7D32]/35 bg-[#f8fdf5] px-5 py-3 text-sm font-semibold text-[#215c28]"
            >
              <FiPlay className="mr-2 inline" /> Play preview
            </button>
            <button
              type="button"
              onClick={() => onStart(session)}
              className="rounded-full bg-gradient-to-r from-[#E8651A] to-[#2E7D32] px-5 py-3 text-sm font-semibold text-white"
            >
              Start session
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MeetingModal({ liveClass, onClose }) {
  if (!liveClass) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[95] bg-black/45 px-4 py-8 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.98 }}
        className="mx-auto max-w-2xl rounded-[2rem] border border-white/60 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8b6c48]">Live class</p>
            <h3 className="mt-2 text-2xl font-heading font-extrabold text-[#1a1a1a]">{liveClass.title}</h3>
            <p className="mt-1 text-sm text-[#666]">with {liveClass.instructor}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-[#faf4ec] p-3 text-[#6c5847]">
            <FiX />
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#faf4ec] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6c48]">Starts at</p>
            <p className="mt-2 text-2xl font-heading font-extrabold text-[#2c251d]">{liveClass.time}</p>
          </div>
          <div className="rounded-2xl bg-[#faf4ec] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b6c48]">Seats left</p>
            <p className="mt-2 text-2xl font-heading font-extrabold text-[#2c251d]">{liveClass.seatsLeft}</p>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#ead7be] bg-[#fdf8f1] p-4 text-sm text-[#5f5347]">
          Meeting room ready. This is where the real integration would open a secure meeting link.
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Dashboard() {
  const { section = "home" } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();
if (auth.profileLoading) {
  return (
    <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
      Loading dashboard...
    </div>
  );
}
const profile = auth.profile;

const userName =
  profile?.full_name ||
  "Yogi";

const wellnessGoal =
  profile?.wellness_goal ||
  "Wellness";

const yogaStyle =
  profile?.preferred_yoga_style ||
  "Yoga";
  const toast = useToast();
  const {
    state,
    modalSession,
    meetingClass,
    lastSession,
    recommendations,
    notifications,
    toggleFavorite,
    openSession,
    markSessionCompleted,
    completeRoutine,
    joinClass,
    setModalSession,
    setMeetingClass,
  } = useDashboard();
  const [query, setQuery] = useState("");
  const hasProPlan = state.activePlan === "Pro";

  const activeSection = sectionMeta[section] || sectionMeta.home;

  const handleResume = () => {
    if (!lastSession) return;
    if (lastSession.premium && !hasProPlan) {
      navigate("/pricing");
      return;
    }
    openSession(lastSession);
    toast.showToast({
      type: "success",
      title: "Resuming session",
      message: `Continuing ${lastSession.title}.`,
    });
  };

  const handleExplore = () => navigate("/dashboard/meditation");

  const filteredResults = query.trim()
    ? sessionCatalog.filter((session) =>
        [session.title, session.instructor, session.category, ...(session.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      )
    : [];

  return (
    <DashboardLayout userName={userName} title={activeSection.title} query={query} onQueryChange={setQuery}>
      <HeroBanner userName={userName}
        lastSession={lastSession}
        onResumeSession={handleResume}
        onExplorePrograms={handleExplore}
        sectionTitle={activeSection.hero}
      />

      <div className="rounded-[2rem] border border-white/60 bg-white/60 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.08)] backdrop-blur-2xl sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8b6c48]">Focus</p>
        <h2 className="mt-2 text-2xl font-heading font-extrabold text-[#1a1a1a]">{activeSection.focus}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {recommendationTopics.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(`/dashboard/${topicRouteMap[item.id] || item.id}`)}
              className="rounded-full border border-[#d6c5af] bg-white px-4 py-2 text-sm font-semibold text-[#6c5847] transition hover:bg-[#faf4ec]"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
<div className="rounded-[2rem] border border-white/60 bg-white/60 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.08)] backdrop-blur-2xl sm:p-6">
  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8b6c48]">
    Your Wellness Profile
  </p>

  <h2 className="mt-2 text-2xl font-heading font-extrabold text-[#1a1a1a]">
    Personalized Journey 🌿
  </h2>

  <div className="mt-5 grid gap-4 sm:grid-cols-3">

    <div className="rounded-2xl bg-[#faf4ec] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6c48]">
        Name
      </p>

      <p className="mt-2 text-lg font-semibold text-[#1a1a1a]">
        {userName}
      </p>
    </div>

    <div className="rounded-2xl bg-[#faf4ec] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6c48]">
        Wellness Goal
      </p>

      <p className="mt-2 text-lg font-semibold text-[#1a1a1a]">
        {wellnessGoal}
      </p>
    </div>

    <div className="rounded-2xl bg-[#faf4ec] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6c48]">
        Yoga Style
      </p>

      <p className="mt-2 text-lg font-semibold text-[#1a1a1a]">
        {yogaStyle}
      </p>
    </div>

  </div>
</div>
      {query.trim() && (
        <section className="rounded-[2rem] border border-white/60 bg-white/60 p-5 shadow-[0_20px_80px_rgba(72,42,8,0.08)] backdrop-blur-2xl sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-heading font-extrabold text-[#1a1a1a]">Search results</h2>
            <p className="text-sm text-[#6c5847]">{filteredResults.length} matches</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredResults.map((session) => (
              <button
                key={session.id}
                type="button"
                onClick={() => openSession(session)}
                className="rounded-[1.5rem] border border-[#ead7be] bg-white p-4 text-left"
              >
                <img src={session.image} alt={session.title} className="h-40 w-full rounded-[1.25rem] object-cover" />
                <p className="mt-4 text-lg font-heading font-bold text-[#1a1a1a]">{session.title}</p>
                <p className="text-sm text-[#666]">{session.instructor}</p>
              </button>
            ))}
            {!filteredResults.length && (
              <p className="text-sm text-[#6c5847]">No sessions found. Try another keyword.</p>
            )}
          </div>
        </section>
      )}

      <FeaturedSlider
        onOpenDetails={(session) => {
          if (session.premium && !hasProPlan) {
            navigate("/pricing");
            return;
          }
          openSession(session);
        }}
        onToggleWishlist={toggleFavorite}
        onPreview={(session) => {
          if (session.premium && !hasProPlan) {
            navigate("/pricing");
            return;
          }
          openSession(session);
          toast.showToast({ title: "Preview ready", message: session.preview });
        }}
        isWishlisted={(id) => state.favorites.includes(id)}
      />

      <DailyRoutine
        completedItems={state.completedRoutine}
        onStartSession={(item) => {
          const session = sessionCatalog.find((entry) => entry.id === item.sessionId);
          if (session) {
            if (session.premium && !hasProPlan) {
              navigate("/pricing");
              return;
            }
            openSession(session);
            markSessionCompleted(session.id, item.duration);
          }
          completeRoutine(item.id);
        }}
        onToggleComplete={(id) => completeRoutine(id)}
      />

      <RecommendedSection
        items={recommendations}
        onOpenDetails={(session) => {
          if (session.premium && !hasProPlan) {
            navigate("/pricing");
            return;
          }
          openSession(session);
        }}
      />

      <ProgressTracker />

      <LiveClasses
        joined={state.liveJoined}
        onJoin={(liveClass) => {
          joinClass(liveClass);
          setMeetingClass(liveClass);
          toast.showToast({
            type: "success",
            title: "Live class joined",
            message: `You're in ${liveClass.title}.`,
          });
        }}
      />

      <Footer />

      <AnimatePresence>
        {modalSession && (
          <SessionModal
            session={modalSession}
            onClose={() => setModalSession(null)}
            onPreview={(session) =>
              toast.showToast({ title: "Preview", message: session.preview || session.description })
            }
            onStart={(session) => {
              markSessionCompleted(session.id, session.duration);
              setModalSession(null);
              toast.showToast({ type: "success", title: "Session started", message: session.title });
            }}
          />
        )}
        {meetingClass && <MeetingModal liveClass={meetingClass} onClose={() => setMeetingClass(null)} />}
      </AnimatePresence>
    </DashboardLayout>
  );
}
