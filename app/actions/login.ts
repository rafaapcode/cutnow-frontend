"use server";
import { apiClient } from "@/lib/axios";
import { LoginFormSchema } from "@/schema/LoginFormSchema";
import { cookies } from "next/headers";
import { z } from "zod";

type ResponseLogin = {
  status: boolean;
  message: string;
  data?: any;
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

    cookies().set("signedin", response.data.signedIn);
    return {
      status: true,
      message: response.data.message,
      data: response.data.data,
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

export const loginBarber = async (
  loginPayload: LoginPayload
): Promise<ResponseLogin> => {
  try {
    const controller = new AbortController();
    const response = await apiClient.post("/auth/login/barber", loginPayload, {
      signal: controller.signal,
    });

    cookies().set("signedin", response.data.signedIn);
    return {
      status: true,
      message: response.data.message,
      data: response.data.data,
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

export const refresh = async () => {
  try {
    const response = await apiClient.get("/auth/refresh");
    return {status: true, data:response};
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
    };
  }
};
