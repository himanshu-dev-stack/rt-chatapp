import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://rt-chatapp.vercel.app/api",
  withCredentials: true,
});
