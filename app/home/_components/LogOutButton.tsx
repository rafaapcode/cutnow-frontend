"use client";
import { logout } from "@/app/actions/logout";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();

  const handleClick = () => {
    logout();
    router.push('/');
  }

  return (
    <span
    onClick={handleClick}
    className="text-neutral-600 hover:text-neutral-700 transition-all duration-100 pb-1 cursor-pointer"
  >
    <LogOutIcon />
  </span>
  )
}

export default LogOutButton