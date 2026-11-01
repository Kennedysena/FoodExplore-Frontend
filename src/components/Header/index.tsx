import Link from "next/link";
import { LogOut, Receipt, Search } from "lucide-react";

import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="flex h-26 w-full items-center justify-between gap-8 bg-surface text-surface-foreground px-30.75 py-6">
      <SidebarTrigger className="size-10 shrink-0 [&_svg]:size-6" />
      <Link href="/" className="shrink-0">
        <Logo className="h-auto w-49.25" />
      </Link>

      <InputGroup className="h-14 grow">
        <InputGroupInput
          type="search"
          aria-label="Buscar"
          placeholder="Busque por pratos ou ingredientes"
        />
        <InputGroupAddon>
          <Search className="size-5" />
        </InputGroupAddon>
      </InputGroup>

      <Button asChild className="h-14 w-54 gap-1 px-8 text-base">
        <Link href="/payment">
          <Receipt className="size-6" />
          Pedidos (0)
        </Link>
      </Button>

      <ModeToggle />

      <Button variant="ghost" size="icon-lg" aria-label="Sair">
        <LogOut className="size-8" />
      </Button>
    </header>
  );
}
