import HairCutModal from "./modals/HairCutModal";

const BarberSettings = () => {
  return (
    <div className="mt-10 px-5 w-full flex flex-col gap-5">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-2 w-[70%]">
          <span className="text-base text-neutral-500">
            Upload das imagens dos seus cortes
          </span>
          <HairCutModal>
            <div className="p-2 w-full text-center bg-neutral-700 rounded-md text-neutral-400 cursor-pointer">
              Upload dos cortes
            </div>
          </HairCutModal>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <span className="text-base text-neutral-500">Upload da foto</span>
          <div className="p-2 w-full text-center bg-neutral-700 rounded-md text-neutral-400">
            Upload da sua foto
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <span className="text-base text-neutral-500">Upload do banner</span>
          <div className="p-2 w-full text-center bg-neutral-700 rounded-md text-neutral-400">
            Upload de um banner
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberSettings;
