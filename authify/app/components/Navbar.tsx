"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User, UserRound, UsersRound  } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="h-20 flex justify-between items-center px-[200px] py-20">
      {/* logo */}
      <Link className="text-3xl font-extrabold rounded-xl px-3" href={"/"}>
        ATFY
      </Link>
      <div className="flex items-center gap-4 text-xl">
        <ModeToggle />
        <Popover>
          <PopoverTrigger>
            <User />
          </PopoverTrigger>
          <PopoverContent className="flex items-start gap-4 flex-col">
            <div className="text-md flex gap-2 items-center">
              <UserRound/>
              <Link href={"/auth"}>Login</Link>
            </div>
            <div className="text-md flex gap-2 items-center">
                <UsersRound/>
              <Link href={"/auth/register"}>Register</Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
