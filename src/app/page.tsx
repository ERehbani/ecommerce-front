// src/app/page.tsx

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import Aside from "@/components/core/aside";
import { CarouselDemo } from "@/components/core/carousel";
import Products from "@/components/products/products";
import { useBearStore } from "@/context/store";

interface User {
  // Define user properties based on your JWT payload
  [key: string]: any;
}

async function getUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token");

  if (token) {
    try {
      const decoded = jwtDecode(token.value) as {
        usuario: User;
        login: boolean;
      };
      return {
        user: decoded.usuario,
        isLoggedIn: decoded.login,
      };
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return {
    user: null,
    isLoggedIn: false,
  };
}

export default async function Home() {
  const { user, isLoggedIn } = await getUser();

  return (
    <main className="mx-auto flex gap-28">
      <Aside />
      <div className="w-full mx-auto">
        <div className="w-[90%]">
          <section className="mt-14">
            <CarouselDemo />
          </section>
          <div className="my-10">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">Trending</h2>
              <h2 className="text-2xl font-bold text-principal">Ver más</h2>
            </div>
            <Products limit={5} />
          </div>
          <div className="my-10">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">Añadidos recientemente</h2>
            </div>
            <Products limit={5} />
          </div>
        </div>
      </div>
    </main>
  );
}
