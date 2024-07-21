import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "react-hot-toast";
import BreadCrumb from "./_components/BreadCrumb";
import BarberBannerImage from "./_components/UploadsComponents/BarberBannerImage";
import BarberLogoImage from "./_components/UploadsComponents/BarberLogoImage";
import BarberStructImages from "./_components/UploadsComponents/BarberStructImages";

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
