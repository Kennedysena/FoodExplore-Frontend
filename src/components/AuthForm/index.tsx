"use client";

import type { FormEvent, ReactNode } from "react";

type AuthFormProps = {
  children: ReactNode;
};

// Sem onSubmit o navegador faria um GET com email e senha na URL
export function AuthForm({ children }: AuthFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: enviar os dados para a API de autenticação
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {children}
    </form>
  );
}
