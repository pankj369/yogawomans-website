import apiClient from "./apiClient";

export const authService = {
  login(payload) {
    return apiClient.post("/auth/login", payload);
  },
  register(payload) {
    return apiClient.post("/auth/register", payload);
  },
  forgotPassword(payload) {
    return apiClient.post("/auth/forgot-password", payload);
  },
  resetPassword(payload) {
    return apiClient.post("/auth/reset-password", payload);
  },
  logout() {
    return apiClient.post("/auth/logout");
  },
};
