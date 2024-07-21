import { Toaster } from "react-hot-toast";
import BreadCrumb from "./_components/BreadCrumb";
import BarberLogoImage from "./_components/UploadsComponents/BarberLogoImage";

const Images = () => {
  return (
    <>
      <Toaster />
      <BreadCrumb />
      {/* <BarberStructImages /> */}
      <BarberLogoImage />
      {/* <BarberBannerImage /> */}
    </>
  );
};

export default Images;
