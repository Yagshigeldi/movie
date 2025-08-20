import axios from "axios";
import { BASE_URL, TOKEN } from "../const";

export const api = axios.create({
  baseURL: BASE_URL
});

api.interceptors.request.use((config) => {
  const token = TOKEN
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
  return config;
});
