import dynamic from "next/dynamic";
import Image from "next/image";
import DescriptionForm from "./DescriptionForm";
const PhotoModal = dynamic(() => import("./modals/PhotoModal"));
const HairCutModal = dynamic(() => import("./modals/HairCutModal"));
const BannerModal = dynamic(() => import("./modals/BannerModal"));

const BarberSettings = () => {
  return (
    <>
      <div className="md:hidden w-[90%] mx-auto mt-5 flex flex-col justify-center items-center gap-5">
        <div className="mt-5 w-[252px] h-[199px] relative">
          <Image
            alt="Warning image about the user experience in the mobile version"
            fill
            src="/warning-mobile.svg"
          />
        </div>
        <p className="mt-10 text-neutral-500 text-lg tracking-tight">
          Acesse esse menu de um dispositivo maior ( Tablet ou Computador ),
          para uma experiência melhor.
        </p>
      </div>
      <div className="hidden md:flex mt-10 px-5 w-full md:flex-col gap-5">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2 w-[90%] xl:w-[70%]">
            <span className="text-sm xl:text-base text-neutral-500">
              Upload dos cortes
            </span>
            <HairCutModal>
              <div className="p-2 w-full text-center bg-neutral-700 rounded-md text-neutral-400 cursor-pointer">
                Upload dos cortes
              </div>
            </HairCutModal>
          </div>
          <div className="flex flex-col gap-2 w-[90%] xl:w-[70%]">
            <span className="text-base text-neutral-500">Upload da foto</span>
            <PhotoModal>
              <div className="p-2 w-full text-center bg-neutral-700 rounded-md text-neutral-400 cursor-pointer">
                Upload da sua foto
              </div>
            </PhotoModal>
          </div>
          <div className="flex flex-col gap-2 w-[90%] xl:w-[70%]">
            <span className="text-base text-neutral-500">Upload do banner</span>
            <BannerModal>
              <div className="p-2 w-full text-center bg-neutral-700 rounded-md text-neutral-400 cursor-pointer">
                Upload de um banner
              </div>
            </BannerModal>
          </div>
        </div>
        <DescriptionForm />
      </div>
    </>
  );
};

export default BarberSettings;
