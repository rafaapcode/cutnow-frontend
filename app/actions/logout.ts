"use server";
import { apiClient } from "@/lib/axios";
import { cookies } from "next/headers";

export const logout = async () => {
  try {
    const res = await apiClient.get("/auth/signOut");
    cookies().delete("signedin");
    cookies().delete("access_token");
    cookies().delete("refresh_token");

    return {
      status: true,
      message: res.data.message,
    };
  } catch (error: any) {
    if (error.status === 400) {
      return {
        status: false,
        message: error.data.message,
      };
    }
    return {
      status: false,
      message: error.message,
    };
  }
};
