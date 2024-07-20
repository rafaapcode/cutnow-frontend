import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-white/10 w-[282px] h-[185px] md:w-[524px] md:h-[344px] rounded-xl flex gap-5 p-2 md:p-7 snap-start">
      <div className="w-[107px] h-[160px] md:w-[211px] md:h-[277px] relative">
        <div className="w-full h-full relative">
          <Image
            fill
            src="/image-test.png"
            alt="client photo"
            className="object-cover grayscale rounded-lg"
          />
        </div>
        <div className="rounded-full w-[30px] h-[30px] md:w-[49px] md:h-[49px] absolute -bottom-3 -right-2 md:-bottom-5 md:-right-4">
          <div className="w-full h-full relative rounded-full shadow-md">
            <Image
              fill
              src="/image-test-2.png"
              alt="barber photo"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-evenly">
        <h3 className="text-base md:text-subtitle-3">Nome Cliente</h3>
        <span className="text-base md:text-[20px] text-neutral-700">09/09/2024</span>
        <span className="text-base md:text-[20px] text-neutral-700">09:00h</span>
        <button disabled className="bg-terciary-green text-black font-bold w-fit rounded-lg px-2 py-1 text-sm md:text-base md:px-3 md:py-2">Cabelo/Barbar</button>
      </div>
    </div>
  );
};

export default Card;