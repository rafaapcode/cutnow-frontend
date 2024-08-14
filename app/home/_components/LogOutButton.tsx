"use client";
import { logout } from "@/app/actions/logout";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogOutButton = ({ classname="" }: { classname?: string }) => {
  const router = useRouter();

  const handleClick = () => {
    logout()
      .then((res) => {
        if (res.status) {
          router.push("/");
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <span
      onClick={handleClick}
      className={`text-neutral-600 hover:text-neutral-700 transition-all duration-100 pb-1 cursor-pointer ${classname && "flex gap-2 text-white"}`}
    >
      <LogOutIcon className={classname}/>
      {classname && <p>Logout</p>}
    </span>
  );
};

export default LogOutButton;
