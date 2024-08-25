"use server";

import { authClient } from "@/lib/axios";
import { cookies } from "next/headers";

type ResponseSignUp = {
  status: boolean;
  message: string;
  statusCode?: string | number;
};

export const UpdateInfo = async (barbershopsInfos: any, id: string | undefined): Promise<ResponseSignUp> => {
  if(!id) {
    return {
      status: false,
      message: "Id é obrigatório"
    }
  }
  try {
    const access_token = cookies().get('access_token');
    const response = await authClient.put(`/barbershop/${id}`, barbershopsInfos, {
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