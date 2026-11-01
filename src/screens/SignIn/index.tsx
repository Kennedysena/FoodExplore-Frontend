import { AuthLayout } from "@/components/AuthLayout";
import { PasswordInput } from "@/components/PasswordInput";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignIn() {
  return (
    <AuthLayout
      title="Faça login"
      submitLabel="Entrar"
      link={{ href: "/register", label: "criar uma conta" }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            className="h-14"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <PasswordInput id="password" name="password" placeholder="No mínimo 6 caracteres" />
        </Field>
      </FieldGroup>
    </AuthLayout>
  );
}
