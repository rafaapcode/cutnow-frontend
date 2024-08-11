"use client";
import { logout } from "@/app/actions/logout";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogOutButton = () => {
  const router = useRouter();

  const handleClick = () => {
    logout()
      .then(res => {
        if(res.status) {
          router.push('/');
        } else {
          toast.error(res.message);
        }
      })
      .catch(err => toast.error(err.message));
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