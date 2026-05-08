import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { readStorage, removeStorage, writeStorage } from "../utils/storage";
import { loadProfileSetupState } from "../pages/profileSetupStorage";

const AUTH_STORAGE_KEY = "yogawomans_auth_session";
const AuthContext = createContext(null);

function getStorageTarget(rememberMe) {
  return rememberMe ? window.localStorage : window.sessionStorage;
}

function readAuthSnapshot() {
  if (typeof window === "undefined") {
    return {
      authenticated: false,
      user: null,
      token: null,
      rememberMe: false,
      profileSetupComplete: false,
      profileSetupSkipped: false,
      lastLoginAt: null,
    };
  }

  const session = readStorage(window.sessionStorage, AUTH_STORAGE_KEY, null);
  const persistent = readStorage(window.localStorage, AUTH_STORAGE_KEY, null);
  const snapshot = session || persistent || null;
  const profile = loadProfileSetupState();

  if (snapshot) {
    return {
      ...snapshot,
      profileSetupComplete: profile.completed || snapshot.profileSetupComplete || false,
      profileSetupSkipped: profile.skipped || snapshot.profileSetupSkipped || false,
    };
  }

  return {
    authenticated: false,
    user: null,
    token: null,
    rememberMe: false,
    profileSetupComplete: profile.completed || false,
    profileSetupSkipped: profile.skipped || false,
    lastLoginAt: null,
  };
}

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(() => readAuthSnapshot());

  useEffect(() => {
    const profile = loadProfileSetupState();
    setAuthState((current) => ({
      ...current,
      profileSetupComplete: profile.completed || current.profileSetupComplete || false,
      profileSetupSkipped: profile.skipped || current.profileSetupSkipped || false,
    }));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = getStorageTarget(authState.rememberMe);
    const snapshot = {
      ...authState,
      authenticated: Boolean(authState.authenticated),
    };
    writeStorage(target, AUTH_STORAGE_KEY, snapshot);

    if (authState.rememberMe) {
      removeStorage(window.sessionStorage, AUTH_STORAGE_KEY);
    } else {
      removeStorage(window.localStorage, AUTH_STORAGE_KEY);
    }
  }, [authState]);

  const login = (payload) => {
    const rememberMe = Boolean(payload.rememberMe);
    const snapshot = {
      authenticated: true,
      user: {
        id: payload.id || payload.email || "user-1",
        name: payload.name || payload.email || "Yoga Member",
        email: payload.email || "",
        phone: payload.phone || "",
        avatar: payload.avatar || "",
      },
      token: payload.token || "jwt.placeholder.token",
      rememberMe,
      profileSetupComplete: payload.profileSetupComplete ?? authState.profileSetupComplete ?? false,
      profileSetupSkipped: payload.profileSetupSkipped ?? authState.profileSetupSkipped ?? false,
      lastLoginAt: new Date().toISOString(),
      role: payload.role || "member",
    };
    setAuthState(snapshot);
    return snapshot;
  };

  const register = (payload) => {
    const snapshot = {
      authenticated: true,
      user: {
        id: payload.id || payload.email || "user-1",
        name: payload.name || payload.email || "Yoga Member",
        email: payload.email || "",
        phone: payload.phone || "",
        avatar: payload.avatar || "",
      },
      token: payload.token || "jwt.placeholder.token",
      rememberMe: Boolean(payload.rememberMe),
      profileSetupComplete: false,
      profileSetupSkipped: false,
      lastLoginAt: new Date().toISOString(),
      role: "member",
    };
    setAuthState(snapshot);
    return snapshot;
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      removeStorage(window.localStorage, AUTH_STORAGE_KEY);
      removeStorage(window.sessionStorage, AUTH_STORAGE_KEY);
    }
    setAuthState({
      authenticated: false,
      user: null,
      token: null,
      rememberMe: false,
      profileSetupComplete: false,
      profileSetupSkipped: false,
      lastLoginAt: null,
      role: "guest",
    });
  };

  const completeProfileSetup = (profileData) => {
    setAuthState((current) => ({
      ...current,
      profileSetupComplete: true,
      profileSetupSkipped: false,
      profile: profileData,
      user: current.user
        ? {
            ...current.user,
            name: profileData.fullName || current.user.name,
          }
        : current.user,
    }));
  };

  const skipProfileSetup = () => {
    setAuthState((current) => ({
      ...current,
      profileSetupComplete: false,
      profileSetupSkipped: true,
    }));
  };

  const updateUser = (patch) => {
    setAuthState((current) => ({
      ...current,
      user: current.user ? { ...current.user, ...patch } : patch,
    }));
  };

  const value = useMemo(
    () => ({
      ...authState,
      isAuthenticated: Boolean(authState.authenticated),
      login,
      register,
      logout,
      completeProfileSetup,
      skipProfileSetup,
      updateUser,
    }),
    [authState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
