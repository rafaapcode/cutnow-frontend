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
      withCredentials: true,
    });
    const header_cookie_access = response.headers["set-cookie"] && response.headers["set-cookie"][0].split(';');
    let accessToken = header_cookie_access && header_cookie_access[0];
    accessToken = accessToken?.replace('access_token=', '');

    const header_cookie_refresh = response.headers["set-cookie"] && response.headers["set-cookie"][1].split(';');
    let refreshToken = header_cookie_refresh && header_cookie_refresh[0];
    refreshToken = refreshToken?.replace('refresh_token=', '');

    cookies().set('access_token', accessToken!);
    cookies().set('refresh_token', refreshToken!);
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
    const response = await apiClient.post("/auth/login/barber", loginPayload);

    const header_cookie_access = response.headers["set-cookie"] && response.headers["set-cookie"][0].split(';');
    let accessToken = header_cookie_access && header_cookie_access[0];
    accessToken = accessToken?.replace('access_token=', '');

    const header_cookie_refresh = response.headers["set-cookie"] && response.headers["set-cookie"][1].split(';');
    let refreshToken = header_cookie_refresh && header_cookie_refresh[0];
    refreshToken = refreshToken?.replace('refresh_token=', '');

    cookies().set('access_token', accessToken!);
    cookies().set('refresh_token', refreshToken!);
    cookies().set("signedin", response.data.signedIn);

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
    const refresh_token = cookies().get('refresh_token');
    const response = await apiClient.get("/auth/refresh", {
      headers: {
        Authorization: refresh_token?.value
      }
    });

    const header_cookie_access = response.headers["set-cookie"] && response.headers["set-cookie"][0].split(';');
    let accessToken = header_cookie_access && header_cookie_access[0];
    accessToken = accessToken?.replace('access_token=', '');

    const header_cookie_refresh = response.headers["set-cookie"] && response.headers["set-cookie"][1].split(';');
    let refreshToken = header_cookie_refresh && header_cookie_refresh[0];
    refreshToken = refreshToken?.replace('refresh_token=', '');

    cookies().set('access_token', accessToken!);
    cookies().set('refresh_token', refreshToken!);

    return {status: true, data:response.data};
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
    };
  }
};
