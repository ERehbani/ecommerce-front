import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import logo from "../../../public/storigami.svg";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-[#bba583]">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <Image src={logo} alt="logo" />
        <div className="relative flex-grow mx-[10%]">
          <Input
            type="search"
            placeholder="Buscar un producto"
            className="w-full rounded-lg bg-background pr-12 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary border-[#bba583]
            "
          />
          <MagnifyingGlassIcon className="absolute right-2.5 top-3 h-4 w-4 text-muted-foreground text-[#bba583]" />
        </div>
        <div className="flex gap-10">
          <Button className="shadow-md text-white border border-[#bba583] bg-[#bba583] hover:text-[#bba583] hover:bg-white hover:border hover:border-[#bba583]">
            Register
          </Button>
          <Button className="shadow-md border border-[#bba583] bg-white text-[#bba583] hover:bg-[#bba583] hover:text-white">
            <Link href={"/login"}>LogIn</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
