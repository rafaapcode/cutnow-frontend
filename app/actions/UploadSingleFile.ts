"use server"
import axios from "axios";
import { cookies } from "next/headers";

type ResponseUploadFiles = {
  status: boolean;
  message: string;
};

export async function UploadLogoImageBarbershop(formdata: FormData, id: string): Promise<ResponseUploadFiles> {
  try {
    const access_token = cookies().get("access_token");
    formdata.append("id", id);
    await axios.post("http://localhost:3002/barbershop/logo", formdata, {
      headers: {
        Authorization: access_token?.value!,
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      status: true,
      message: "Logo enviada com sucesso !",
    };
  } catch (error: any) {
    console.log(error?.response);
    return {
      status: false,
      message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
    };
  }
}


export async function UploadBannerImageBarbershop(formdata: FormData, id: string): Promise<ResponseUploadFiles> {
  try {
    const access_token = cookies().get("access_token");
    formdata.append("id", id);
    await axios.post("http://localhost:3002/barbershop/banner", formdata, {
      headers: {
        Authorization: access_token?.value!,
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      status: true,
      message: "Banner enviado com sucesso !",
    };
  } catch (error: any) {
    console.log(error.response?.status);
    return {
      status: false,
      message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
    };
  }
}


export async function UploadFotoImageBarbers(formdata: FormData, id: string): Promise<ResponseUploadFiles> {
  try {
    const access_token = cookies().get("access_token");
    formdata.append("id", id);
    await axios.post("http://localhost:3002/barber/foto", formdata, {
      headers: {
        Authorization: access_token?.value!,
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      status: true,
      message: "Foto enviada com sucesso !",
    };
  } catch (error: any) {
    console.log(error.response?.status);
    return {
      status: false,
      message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
    };
  }
}


export async function UploadBannerImageBarbers(formdata: FormData, id: string): Promise<ResponseUploadFiles> {
  try {
    const access_token = cookies().get("access_token");
    formdata.append("id", id);
    await axios.post("http://localhost:3002/barber/banner", formdata, {
      headers: {
        Authorization: access_token?.value!,
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      status: true,
      message: "Banner enviado com sucesso !",
    };
  } catch (error: any) {
    console.log(error.response?.status);
    return {
      status: false,
      message: error.response?.message ? error.response?.message : "Erro interno , tente mais tarde",
    };
  }
}
