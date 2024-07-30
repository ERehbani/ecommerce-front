"use client"
import Aside from "@/components/core/aside";
import { CarouselDemo } from "@/components/core/carousel";
import Products from "@/components/products/products";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
// import { useRouter } from "next/router";

export default function Home() {
  
  // const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('auth_token');
    console.log(token)
    if (token) {
      const decoded = jwtDecode(token);
      console.log('Decoded Token:', decoded);

      const { usuario, login } = decoded;
      console.log('User Data:', usuario);
      console.log('Login Status:', login);

      localStorage.setItem('user', JSON.stringify(usuario));
      localStorage.setItem('login', login);

    }
  }, []);

  return (
    <main className="mx-auto flex gap-28">
      <Aside />
      <div className="w-full pr-32 mx-auto">
        <section className="mt-14">
          <CarouselDemo />
        </section>
        <div className="my-10">
          <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Trending</h2>
          <h2 className="text-2xl font-bold text-[#bba583]">Ver más</h2>
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
    </main>
  );
}
