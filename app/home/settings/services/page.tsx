import dynamic from "next/dynamic";
import BreadCrumb from "./_components/BreadCrumb";
const ServicesUpdateForm = dynamic(() => import("./ServicesForm/ServicesUpdateForm"));

const Services = () => {
  return (
    <>
      <BreadCrumb />
      <ServicesUpdateForm />
    </>
  );
};

export default Services;
