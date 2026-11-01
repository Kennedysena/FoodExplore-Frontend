"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Só redireciona navegações no navegador; requisições de arquivos recebem o 404
export function RedirectHome() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
