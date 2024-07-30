"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import logo from "../../../public/storigami.svg";

const Navbar = () => {
  const [user, setUser] = useState();
  console.log(user);
  useEffect(() => {
    const userLocal = localStorage.getItem("user");

    const userParse = JSON.parse(userLocal);
    setUser(userParse);
  }, []);
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
        {user ? (
          <div className="flex items-center gap-4">
            <Button className="relative p-4 shadow-md border border-[#bba583] bg-white text-[#bba583] hover:bg-[#bba583] hover:text-white group">
              <div className="absolute right-1 top-1 size-5 bg-blue-500 rounded-full flex items-center justify-center">
                <p className="text-white text-xs p-1">3</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white">
                <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
              </svg>
            </Button>
            <Button className="p-0">
              <Image
                src={user.avatarImg}
                alt="user"
                width={100}
                height={0}
                className="size-14 hover:p-1 transition-all bg-white rounded-md "
              />
            </Button>
          </div>
        ) : (
          <div className="flex gap-10">
            <Button className="shadow-md text-white border border-[#bba583] bg-[#bba583] hover:text-[#bba583] hover:bg-white hover:border hover:border-[#bba583]">
              Register
            </Button>
            <Button className="shadow-md border border-[#bba583] bg-white text-[#bba583] hover:bg-[#bba583] hover:text-white">
              <Link href={"/login"}>LogIn</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
