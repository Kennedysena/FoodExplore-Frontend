import Image, { type StaticImageData } from "next/image";

import Gambe from "@/assets/Gambe.svg";
import Hero from "@/assets/hero.svg";
import Juice from "@/assets/Juice.svg";
import Macaroons from "@/assets/Macaron.svg";
import Pastry from "@/assets/Pastry.svg";
import Prune from "@/assets/Prune.svg";
import Ravanello from "@/assets/Ravanello.svg";
import Tea from "@/assets/Tea.svg";
import { DishCard } from "@/components/DishCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Dish = {
  img: StaticImageData;
  title: string;
  description: string;
  price: string;
};

const categories: { title: string; dishes: Dish[] }[] = [
  {
    title: "Refeições",
    dishes: [
      { img: Gambe, title: "Spaguetti Gambe", description: "Massa fresca com camarões e pesto", price: "R$ 79,97" },
      { img: Gambe, title: "Spaguetti Gambe", description: "Massa fresca com camarões e pesto", price: "R$ 79,97" },
      { img: Ravanello, title: "Salada Ravanelo", description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", price: "R$ 79,97" },
      { img: Ravanello, title: "Salada Ravanelo", description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim", price: "R$ 79,97" },
    ],
  },
  {
    title: "Sobremesas",
    dishes: [
      { img: Prune, title: "Prugna Pie", description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.", price: "R$ 79,97" },
      { img: Pastry, title: "Peachy pastrie", description: "Delicioso folheado e pêssego com folhas de hortelã", price: "R$ 32,97" },
      { img: Macaroons, title: "Macarons", description: "Farinha de amêndoas, manteiga, claras e açúcar", price: "R$ 79,97" },
    ],
  },
  {
    title: "Bebidas",
    dishes: [
      { img: Juice, title: "Suco de Maracujá", description: "Suco de maracujá gelado, cremoso, docinho", price: "R$ 13,97" },
      { img: Juice, title: "Suco de Maracujá", description: "Suco de maracujá gelado, cremoso, docinho", price: "R$ 13,97" },
      { img: Tea, title: "Tè d´autunno", description: "Chá de anis, canela e limão. Sinta outono italiano.", price: "R$ 19,97" },
    ],
  },
];

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto mt-41 w-full max-w-287.25 flex-1">
        <header className="relative mr-4 ml-3 flex h-65 flex-col items-end rounded-sm bg-linear-to-b from-hero-from to-hero-to">
          <Image src={Hero} alt="" className="absolute -top-34.5 -left-17.5" priority />
          <div className="mt-22 mr-25.25 w-105.25 text-foreground">
            <h1 className="mb-2 font-display text-hero font-medium">Sabores inigualáveis</h1>
            <p className="leading-snug">
              Sinta o cuidado do preparo com ingredientes selecionados
            </p>
          </div>
        </header>

        <div className="mt-15.5 flex flex-col gap-6 lg:gap-12">
          {categories.map((category) => (
            <section key={category.title}>
              <h2 className="mb-6 font-display text-lg font-medium text-title lg:text-heading">
                {category.title}
              </h2>

              <Carousel opts={{ align: "start" }}>
                <CarouselContent className="-ml-6.75">
                  {category.dishes.map((dish, index) => (
                    <CarouselItem key={`${dish.title}-${index}`} className="basis-auto pl-6.75">
                      <DishCard {...dish} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Degradês nas bordas do carrossel */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-1 hidden w-56 bg-linear-to-r from-background to-transparent lg:block" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-1 hidden w-56 bg-linear-to-l from-background to-transparent lg:block" />

                <CarouselPrevious variant="ghost" className="left-4 z-2 size-10 [&_svg]:size-6" />
                <CarouselNext variant="ghost" className="right-4 z-2 size-10 [&_svg]:size-6" />
              </Carousel>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
