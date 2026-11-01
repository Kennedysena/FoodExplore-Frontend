import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

import { QuantityStepper } from "@/components/QuantityStepper";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter } from "@/components/ui/card";

type DishCardProps = {
  img: StaticImageData;
  title: string;
  description: string;
  price: string;
};

export function DishCard({ img, title, description, price }: DishCardProps) {
  return (
    <Card className="relative h-115.5 w-76 items-center gap-0 rounded-lg p-6 shadow-none">
      <CardAction className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" aria-label="Favoritar">
          <Heart className="size-6" />
        </Button>
      </CardAction>

      <CardContent className="flex flex-col items-center gap-4 px-0">
        <Link href="/dish" className="group flex flex-col items-center gap-4">
          <Image src={img} alt="" className="h-auto w-44" />
          <span className="flex items-center font-display text-2xl font-medium group-hover:underline">
            {title}
            <ChevronRight className="size-8" />
          </span>
        </Link>

        <p className="line-clamp-2 text-center text-sm text-muted-foreground">{description}</p>
        <span className="text-heading text-price">{price}</span>
      </CardContent>

      <CardFooter className="mt-auto gap-4 px-0">
        <QuantityStepper />
        <Button className="h-12 px-6 font-display">incluir</Button>
      </CardFooter>
    </Card>
  );
}
