import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Newspaper, Scissors, Settings } from "lucide-react";
import Link from "next/link";

type AvatarMobileProps = {
  avatarUrl: string;
  isAdm: boolean;
};

const AvatarMobile = ({ avatarUrl, isAdm }: AvatarMobileProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="w-[50px] h-[50px]">
          <Avatar className="size-full">
            <AvatarImage
              src={avatarUrl}
              alt="logo adm barbershop"
              fetchPriority="high"
            />
          </Avatar>
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
            <DropdownMenuItem>
              <Newspaper className="mr-2 size-4" />
              <Link href="/home/requests">Solicitações</Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <Settings className="mr-2 size-4" />
            <Link href="/home/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMobile;
