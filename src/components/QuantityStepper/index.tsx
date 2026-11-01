"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";

export function QuantityStepper() {
  const [quantity, setQuantity] = useState(1);

  return (
    <ButtonGroup aria-label="Quantidade">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Diminuir quantidade"
        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
      >
        <Minus className="size-6" />
      </Button>
      <ButtonGroupText className="border-0 bg-transparent text-xl font-bold tabular-nums shadow-none">
        {String(quantity).padStart(2, "0")}
      </ButtonGroupText>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Aumentar quantidade"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        <Plus className="size-6" />
      </Button>
    </ButtonGroup>
  );
}
