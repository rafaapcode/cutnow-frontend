"use server";

import { apiClient } from "@/lib/axios";

type ResponseSignUp = {
  status: boolean;
  message: string;
};

export const SignUpBarber = async (barberInfos: any): Promise<ResponseSignUp> => {
  try {
    const response = await apiClient.post("/auth/signup/barber", barberInfos);

    return {
      status: true,
      message: response.data.message
    }
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