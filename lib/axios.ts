import { refresh } from "@/app/actions/login";
import axios from "axios";


export const authClient = axios.create({
  baseURL: process.env.BASE_URL_AUTH,
  withCredentials: true,
});

authClient.interceptors.response.use(
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
    return authClient(originalRequest);
  }
);