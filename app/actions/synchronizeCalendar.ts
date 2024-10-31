"use server";
import { authClient } from "@/lib/axios";
import { cookies } from "next/headers";

export const SynchronizeCalendar = async (): Promise<any> => {
  try {
    const access_token = cookies().get('access_token');
    const response = await authClient.get("http://localhost:3001/calendar",{
      headers: {
        Authorization: access_token?.value
      }
    });
    console.log(response);
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