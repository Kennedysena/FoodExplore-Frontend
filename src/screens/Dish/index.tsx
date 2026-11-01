import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import Ravanello from "@/assets/Ravanello.svg";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuantityStepper } from "@/components/QuantityStepper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ingredients = ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"];

export function Dish() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto flex-1 px-30.5 pt-8 pb-38.75">
        <Button
          asChild
          variant="link"
          className="h-12 gap-0 px-0 font-display text-2xl font-bold text-foreground has-[>svg]:px-0"
        >
          <Link href="/">
            <ChevronLeft className="size-10 text-title" />
            voltar
          </Link>
        </Button>

        <div className="mt-10 flex items-center gap-12">
          <Image src={Ravanello} alt="Salada Ravanello" className="h-auto w-97.5" priority />

          <div className="flex flex-col gap-6 text-left">
            <h1 className="font-display text-hero font-medium text-title">Salada Ravanello</h1>
            <p className="font-display text-2xl font-light text-foreground">
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um
              toque especial.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {ingredients.map((ingredient) => (
                <Badge
                  key={ingredient}
                  variant="secondary"
                  className="h-8 rounded-md px-2 font-display text-sm"
                >
                  {ingredient}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-8">
              <QuantityStepper />
              <Button className="h-12 px-6">incluir ∙ R$ 25,00</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
