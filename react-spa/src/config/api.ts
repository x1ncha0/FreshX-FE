// src/config/api.ts
export const API_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINTS = {
  login: `${API_URL}/auth/login`,
  profile: `${API_URL}/user/profile`,
  // Thêm các endpoint khác tại đây
};
