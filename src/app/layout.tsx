import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Hydration from "@/context/hydation";
import NavbarWrapper from "@/components/core/navbarWrapper";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          nunito.className
        )}>
        <Hydration>
          <NavbarWrapper>{children}</NavbarWrapper>
          <Toaster />
        </Hydration>
      </body>
    </html>
  );
}
