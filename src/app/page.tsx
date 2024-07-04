import Products from "@/components/products/products";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="container mx-auto">
      
        <Products />
    </main>
  );
}
