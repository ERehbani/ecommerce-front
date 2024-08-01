"use client"
import { usePathname } from "next/navigation";
import Navbar from "../navbar";

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
    'use client';
    const path = usePathname();
    return (
      <>
        {path !== "/login" && <Navbar />}
        {children}
      </>
    );
  }