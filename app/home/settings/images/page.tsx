import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import BreadCrumb from "./_components/BreadCrumb";
const BarberStructImages = dynamic(() => import("./_components/UploadsComponents/BarberStructImages"));
const BarberBannerImage = dynamic(() => import("./_components/UploadsComponents/BarberBannerImage"));
const BarberLogoImage = dynamic(() => import("./_components/UploadsComponents/BarberLogoImage"));

const Images = () => {
  return (
    <>
      <Toaster />
      <BreadCrumb />
      <Tabs defaultValue="estrutura" className="w-full mt-5">
        <TabsList className="flex flex-wrap justify-center md:w-full bg-neutral-950">
          <TabsTrigger value="estrutura" className="text-xs md:text-base">Estrutura da barbearia</TabsTrigger>
          <TabsTrigger value="logo" className="text-xs md:text-base">Logo da Barbearia</TabsTrigger>
          <TabsTrigger value="banner" className="text-xs md:text-base">Banner da Barbearia</TabsTrigger>
        </TabsList>
        <TabsContent value="estrutura">
          <BarberStructImages />
        </TabsContent>
        <TabsContent value="logo">
          <BarberLogoImage />
        </TabsContent>
        <TabsContent value="banner">
          <BarberBannerImage />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Images;
