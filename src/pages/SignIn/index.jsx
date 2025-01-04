import { Container, Form, Brand } from "./styles";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import Logo from "../../assets/food explorer.svg";

export function SignIn() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="Logo" />
      </Brand>

      <Form>
        <h1>Faça login</h1>
        <Section title="Email" marginBottom="0.8rem" theme={"#C4C4CC"}>
          <input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </Section>

        <Section title="Senha" marginBottom="0.8rem" theme={"#C4C4CC"}>
          <input placeholder="No mínimo 6 caracteres" type="password" />
        </Section>

        <Button title={"Entrar"} />
        <p>criar uma conta </p>
      </Form>
    </Container>
  );
}
