import Link from "next/link";

import { RedirectHome } from "@/components/RedirectHome";

// Rotas desconhecidas voltam para a Home (antigo <Route path="*" />)
export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <RedirectHome />
      <p className="text-muted-foreground">Página não encontrada.</p>
      <Link href="/" className="font-display text-foreground hover:underline">
        Voltar para a Home
      </Link>
    </main>
  );
}
