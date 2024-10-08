"use server";

import { authClient } from "@/lib/axios";

type ResponseSignUp = {
  status: boolean;
  message: string;
};

export const SignUpAdmin = async (barbershopInfos: any): Promise<ResponseSignUp> => {
  try {
    const response = await authClient.post("/auth/signup/admin", barbershopInfos);

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