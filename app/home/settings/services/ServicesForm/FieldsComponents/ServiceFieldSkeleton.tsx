const ServiceFieldSkeleton = () => {
  return (
    <div className="flex justify-between gap-5">
      <div className="w-full">
        <div className="text-sm md:text-base" />
        <input className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 animate-pulse" />
      </div>
      <div className="flex w-full justify-between items-end gap-5">
        <div className="w-full">
          <div className="text-sm md:text-base" />
          <input className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 animate-pulse" />
        </div>
        <div className="w-full">
          <div className="text-sm md:text-base" />
          <input className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ServiceFieldSkeleton;
