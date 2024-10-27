"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/context/authContext";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { ImageIcon, Newspaper, ScissorsIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import LogOutButton from "../LogOutButton";
import AvatarMobile from "./AvatarMobile";
import { getBarberFoto, getBarbershopLogo } from "./Queries/navbarQueries";
import StatusComponent from "./StatusComponent";

const NavBar = () => {
  const user = useAuthStore((state) => state.user);
  const isAdm = user ? user.isAdm : false;
  const pathName = usePathname();
  const query = isAdm ? getBarbershopLogo : getBarberFoto;
  const { data, error, loading } = useQuery(query, {
    variables: {
      id: user?.id!,
    },
  });
  const logoUrl = (error)
    ? "./default-photo.jpg"
    : ( isAdm ? (data?.barbershopInfo?.informacoes ? data?.barbershopInfo?.informacoes?.logo : "./default-photo.jpg") : (data?.barber?.informacoes ? data?.barber?.informacoes.foto : "./default-photo.jpg") )

  return (
    <header className="w-full h-28 flex justify-between items-center border-b border-[#393939]">
      <Toaster position="top-center" />
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
          <StatusComponent isAdm={isAdm} id={user?.id} />
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
                pathName == "/home/requests" && "border-b border-[#AAD704]"
              )}
            >
              <Newspaper />
            </Link>
            <Link
              href="/home/management-images"
              className={cn(
                "text-neutral-600 hover:text-neutral-700 transition-all duration-100 pb-1",
                pathName == "/home/management-images" && "border-b border-[#AAD704]"
              )}
            >
              <ImageIcon />
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
          {loading ? (
            <div className="size-full rounded-full bg-neutral-800 animate-pulse" />
          ) : (
            <Avatar className="size-full">
              <AvatarImage src={logoUrl} alt="logo adm barbershop" />
            </Avatar>
          )}
        </div>
      </div>
      <div className="px-2 md:hidden md:px-0">
        <AvatarMobile
          isAdm={isAdm}
          loading={loading}
          avatarUrl={
            logoUrl
          }
        />
      </div>
    </header>
  );
};

export default NavBar;
