import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  if (typeof window === "undefined") {
    return config;
  }

  const authRaw = window.sessionStorage.getItem("yogawomans_auth_session")
    || window.localStorage.getItem("yogawomans_auth_session");
  if (authRaw) {
    try {
      const auth = JSON.parse(authRaw);
      if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
    } catch {
      // ignore malformed auth state
    }
  }
  return config;
});

export default apiClient;
