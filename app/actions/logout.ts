"use server";
import { cookies } from "next/headers";

export const logout = async () => {
  try {
    cookies().delete("signedin");
    cookies().delete("access_token");
    cookies().delete("refresh_token");

    return {
      status: true,
      message: "Você saiu !",
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
