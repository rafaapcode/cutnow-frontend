"use server";

import axios from "axios";
import { cookies } from "next/headers";

type ResponseDeleteFiles = {
  status: boolean;
  message: string;
};

export async function DeleteFileBarbershop(index: number, id: string): Promise<ResponseDeleteFiles> {
    try {
      const access_token = cookies().get("access_token");
      const deleteFile = await axios.delete(`${process.env.UPLOAD_URL}/barbershop/structure/${index}/${id}`, {
        headers: {
          "Authorization": access_token?.value
        }
      })

      return {
        status: true,
        message: deleteFile.data.message
      }
    } catch (error: any) {
      console.log(error?.message)
      return {
        status: false,
        message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
      };
    }
}

export async function DeleteFileBarber(index: number, id: string): Promise<ResponseDeleteFiles> {
  try {
    const access_token = cookies().get("access_token");
    const deleteFile = await axios.delete(`${process.env.UPLOAD_URL}/barber/portfolio/${index}/${id}`, {
      headers: {
        "Authorization": access_token?.value
      }
    })

    return {
      status: true,
      message: deleteFile.data.message
    }
  } catch (error: any) {
    console.log(error?.message)
    return {
      status: false,
      message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
    };
  }
}