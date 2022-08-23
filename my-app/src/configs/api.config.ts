export const API_URL = "http://localhost:5000/api";

export const getAuthUrl = (string: string) => `/auth/${string}`;
export const getPostUrl = (string: string) => `/posts/${string}`;