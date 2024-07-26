import Aside from "@/components/core/aside";
import { CarouselDemo } from "@/components/core/carousel";
import Products from "@/components/products/products";

export default function Home() {
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
