import { Toaster } from "react-hot-toast";
import BreadCrumb from "./_components/BreadCrumb";
import BarberLogoImages from "./_components/UploadsComponents/BarberLogoImages";

const Images = () => {
  return (
    <>
      <Toaster />
      <BreadCrumb />
      {/* <BarberStructImages /> */}
      <BarberLogoImages />
    </>
  );
};

export default Images;
