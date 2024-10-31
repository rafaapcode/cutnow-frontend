import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { ImageIcon, Scissors, Settings } from "lucide-react";
import Link from "next/link";
import LogOutButton from "../LogOutButton";

type AvatarMobileProps = {
  avatarUrl: string;
  isAdm: boolean;
  loading: boolean;
};

const AvatarMobile = ({ avatarUrl, isAdm, loading }: AvatarMobileProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="w-[50px] h-[50px]">
          {loading ? (
            <div className="size-full rounded-full bg-neutral-800 animate-pulse" />
          ) : (
            <Avatar className="size-full">
              <AvatarImage
                src={avatarUrl}
                alt="logo adm barbershop"
                fetchPriority="high"
              />
            </Avatar>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit mr-2">
        <DropdownMenuGroup>
          {isAdm ? (
            <DropdownMenuItem>
              <Scissors className="mr-2 size-4" />
              <Link href="/home/barbers">Barbers</Link>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem>
                <ImageIcon className="mr-2 size-4" />
                <Link href="/home/management-images">Galeria</Link>
              </DropdownMenuItem>
            </>
          )}
          <DropdownMenuItem>
            <Settings className="mr-2 size-4" />
            <Link href="/home/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutButton classname="text-white size-4" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMobile;
