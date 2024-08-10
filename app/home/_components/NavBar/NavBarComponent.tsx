"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/context/authContext";
import { cn } from "@/lib/utils";
import { Newspaper, ScissorsIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogOutButton from "../LogOutButton";
import AvatarMobile from "./AvatarMobile";
import StatusComponent from "./StatusComponent";

const NavBar = () => {
  const { user } = useAuthStore();
  const [status, setStatus] = useState("");
  const isAdm = user.isAdm;
  const pathName = usePathname();
  return (
    <header className="w-full h-28 flex justify-between items-center border-b border-[#393939]">
      <div className="flex items-center gap-5 px-2 md:px-0 md:gap-10">
        <div className="w-[101px] h-[83px] relative">
          <Link href="/home">
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
          <StatusComponent isAdm={isAdm} setStatus={setStatus} />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-10">
        {isAdm ? (
          <>
            <Link
              href="/home/barbers"
              className={cn(
                "text-neutral-600 hover:text-neutral-700 transition-all duration-100 pb-1",
                pathName == "/home/barbers" && "border-b border-[#AAD704]"
              )}
            >
              <ScissorsIcon />
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/home/requests"
              className={cn(
                "text-neutral-600 hover:text-neutral-700 transition-all duration-100 pb-1",
                pathName == "/home/barbers" && "border-b border-[#AAD704]"
              )}
            >
              <Newspaper />
            </Link>
          </>
        )}
        <Link
          href="/home/settings"
          className={cn(
            "text-neutral-600 hover:text-neutral-700 transition-all duration-100 pb-1",
            pathName == "/home/settings" && "border-b border-[#AAD704]"
          )}
        >
          <Settings />
        </Link>
        <LogOutButton />
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
        <AvatarMobile isAdm={isAdm} avatarUrl="https://github.com/shadcn.png" />
      </div>
    </header>
  );
};

export default NavBar;
