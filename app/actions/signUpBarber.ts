"use server";

import { apiClient } from "@/lib/axios";
import { cookies } from "next/headers";

type ResponseSignUp = {
  status: boolean;
  message: string;
  statusCode?: string | number;
};

export const SignUpBarber = async (barberInfos: any): Promise<ResponseSignUp> => {
  try {
    const access_token = cookies().get('access_token');
    const response = await apiClient.post("/auth/signup/barber", barberInfos, {
      headers: {
        Authorization: access_token?.value
      }
    });

    return {
      status: true,
      message: response.data.message
    }
  } catch (error: any) {
    if (error.status === 400) {
      return {
        status: false,
        message: error.data.message,
        statusCode: error.status
      };
    }
    return {
      status: false,
      message: error.message,
      statusCode: error.status
    };
  }
};