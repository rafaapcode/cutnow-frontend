import dynamic from "next/dynamic";
import BreadCrumb from "./_components/BreadCrumb";
const InfoUpdateForm = dynamic(() => import("./InfoForm/InfoUpdateForm"));

const Info = () => {
  return (
    <>
      <BreadCrumb />
      <InfoUpdateForm />
    </>
  )
}

export default Info