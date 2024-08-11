import { refresh } from "@/app/actions/login";
import axios from "axios";


export const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if(error.response && error.response.status !== 401) {
      return Promise.reject(error.response);
    }
    const originalRequest = error.config;
    const res = await refresh();
    if(!res.status){
      return Promise.reject(error.response);
    }
    return apiClient(originalRequest);
  }
);