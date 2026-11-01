import type { ReactNode } from "react";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { AuthForm } from "@/components/AuthForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AuthLayoutProps = {
  title: string;
  submitLabel: string;
  link: { href: string; label: string };
  children: ReactNode;
};

// Estrutura compartilhada pelas telas de login e cadastro
export function AuthLayout({ title, submitLabel, link, children }: AuthLayoutProps) {
  return (
    <div className="relative flex h-screen items-center justify-between px-32.75">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>

      <Logo className="h-12 w-81" />

      <Card className="w-119 gap-8 rounded-2xl border-0 bg-surface text-surface-foreground p-16 shadow-none">
        <CardHeader className="px-0">
          <CardTitle className="text-center font-display text-heading font-normal">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <AuthForm>
            {children}

            <Button type="submit" className="h-12 w-full font-display">
              {submitLabel}
            </Button>
            <Button asChild variant="link" className="font-display text-foreground">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          </AuthForm>
        </CardContent>
      </Card>
    </div>
  );
}
