"use client";

import { useState, type ComponentProps } from "react";
import { Eye, EyeOff } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function PasswordInput(props: Omit<ComponentProps<typeof InputGroupInput>, "type">) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <InputGroup className="h-14">
      <InputGroupInput {...props} type={isPasswordVisible ? "text" : "password"} />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-sm"
          aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
          onClick={() => setIsPasswordVisible((prevState) => !prevState)}
        >
          {isPasswordVisible ? <Eye /> : <EyeOff />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
