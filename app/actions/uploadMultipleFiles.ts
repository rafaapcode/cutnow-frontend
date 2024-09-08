"use server";
import axios from "axios";
import { cookies } from "next/headers";

type ResponseUploadFiles = {
  status: boolean;
  message: string;
};

export async function UploadMultipleFilesBarbershop(
  formdata: FormData,
  id: string
): Promise<ResponseUploadFiles> {
  try {
    const access_token = cookies().get("access_token");
    formdata.append("id", id);
    await axios.post(
      "http://localhost:3002/barbershop/structure",
      formdata,
      {
        headers: {
          "Authorization": access_token?.value!,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return {
      status: true, 
      message: "Imagens enviadas com sucesso !"
    }
  } catch (error: any) {
    console.log(error.response?.status);
    return {
      status: false,
      message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
    };
  }
}

export async function UploadMultipleFilesBarbers(
  formdata: FormData,
  id: string
): Promise<ResponseUploadFiles> {
  try {
    const access_token = cookies().get("access_token");
    formdata.append("id", id);
    await axios.post(
      "http://localhost:3002/barber/portfolio",
      formdata,
      {
        headers: {
          "Authorization": access_token?.value!,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return {
      status: true, 
      message: "Imagens enviadas com sucesso !"
    }
  } catch (error: any) {
    console.log(error.response?.status);
    return {
      status: false,
      message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
    };
  }
}
