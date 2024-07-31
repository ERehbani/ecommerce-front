import posho from "../../../../public/posho.png.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <Carousel className="w-full p-0 h-fit relative">
    <div className="absolute z-20 right-12 top-6 flex gap-4">
    <CarouselPrevious className="size-12 border-none"/>
    <CarouselNext className="size-12 border-none"/>
    </div>
      <CarouselContent className="h-fit w-full">
        {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <CarouselItem key={index} className="p-0">
            <div>
              <Card className="p-0 border-none">
                <CardContent className="flex items-center justify-center">
                  <Image src={posho} alt="posho" className="rounded-2xl" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
