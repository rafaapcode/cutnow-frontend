import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full h-28 flex justify-between items-center border-b border-[#393939]">
      <div className="flex">
        <div className="w-[101px] h-[83px] relative">
          <Link href="/">
            <Image
              alt="Logo CutNow"
              fill
              src="/logo.svg"
              className="object-fill"
              fetchPriority="low"
            />
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
