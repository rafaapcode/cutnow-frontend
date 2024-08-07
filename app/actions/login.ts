"use server";
import { apiClient } from "@/lib/axios";
import { LoginFormSchema } from "@/schema/LoginFormSchema";
import { z } from "zod";

type ResponseLogin = {
  status: boolean;
  message: string;
  signedIn: boolean | null;
};

type LoginPayload = z.infer<typeof LoginFormSchema>;

export const loginAdm = async (
  loginPayload: LoginPayload
): Promise<ResponseLogin> => {
  try {
    const controller = new AbortController();
    const response = await apiClient.post("/auth/login/admin", loginPayload, {
      signal: controller.signal,
    });

    return {
      status: true,
      message: response.data.message,
      signedIn: response.data.signedIn,
    };
  } catch (error: any) {
    console.log(error.response.status);
    if (error.response.status === 400 || error.response.status === 401) {
      return {
        status: false,
        message: error.response.data.message,
        signedIn: null,
      };
    }
    return {
      status: false,
      message: error.message,
      signedIn: null,
    };
  }
};

export const loginBarber = async (
  loginPayload: LoginPayload
): Promise<ResponseLogin> => {
  try {
    const controller = new AbortController();
    const response = await apiClient.post("/auth/login/barber", loginPayload, {
      signal: controller.signal,
    });

    return {
      status: true,
      message: response.data.message,
      signedIn: response.data.signedIn,
    };
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401) {
      return {
        status: false,
        message: error.response.data.message,
        signedIn: null,
      };
    }
    return {
      status: false,
      message: error.message,
      signedIn: null,
    };
  }
};
