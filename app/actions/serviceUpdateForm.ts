"use server";

import { cookies } from "next/headers";

type ResponseSignUp = {
  status: boolean;
  data?: any;
  message?: string;
};

export const getServices = async (
  id: string | undefined
): Promise<ResponseSignUp> => {
  if (!id) {
    return {
      status: false,
      message: "Id é obrigatório",
    };
  }
  try {
    const access_token = cookies().get("access_token");

    const headers = new Headers({
      Authorization: access_token?.value as string,
    });

    const res = await fetch(`http://localhost:3001/services/${id}`, {
      headers,
    });

    const result = await res.json();
    return {
      status: true,
      data: result.data,
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
    };
  }
};
