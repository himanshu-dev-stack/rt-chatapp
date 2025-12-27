import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://rt-chatapp.vercel.app/api" : "/api",
  withCredentials: true,
});
