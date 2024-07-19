"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScissorsIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AvatarMobile from "./AvatarMobile";
import StatusComponent from "./StatusComponent";

const NavBar = () => {
  const [status, setStatus] = useState("fechado");
  console.log(status);
  return (
    <div className="w-full h-28 flex justify-between items-center border-b border-[#393939]">
      <div className="flex items-center gap-5 px-2 md:px-0 md:gap-10">
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
        <div className="w-fit">
          <StatusComponent setStatus={setStatus} />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <Link
          href="/home/barbers"
          className="text-neutral-600 hover:text-neutral-700 transition-all duration-100"
        >
          <ScissorsIcon />
        </Link>
        <Link
          href="/home/settings"
          className="text-neutral-600 hover:text-neutral-700 transition-all duration-100"
        >
          <Settings />
        </Link>
        <div className="w-[65px] h-[65px]">
          <Avatar className="size-full">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="logo adm barbershop"
            />
          </Avatar>
        </div>
      </div>
      <div className="px-2 md:hidden md:px-0">
        <AvatarMobile avatarUrl="https://github.com/shadcn.png"/>
      </div>
    </div>
  );
};

export default NavBar;
