import apiClient from "./apiClient";

export const userService = {
  getCurrentUser() {
    return apiClient.get("/users/me");
  },
  updateProfile(payload) {
    return apiClient.put("/users/me", payload);
  },
  updateSettings(payload) {
    return apiClient.patch("/users/me/settings", payload);
  },
};
