import { Container, Form, Brand } from "./styles";

import { Section } from "../../components/Section";
import { Link } from "react-router-dom";

import Logo from "../../assets/food explorer.svg";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="Logo" />
      </Brand>

      <Form>
        <h1>Faça login</h1>
        <Section title="Email" marginBottom="0.8rem" theme={"#C4C4CC"}>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </Section>

        <Section title="Senha" marginBottom="0.8rem" theme={"#C4C4CC"}>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
          />
        </Section>

        <ButtonText title="Entrar" />
        <Link to="/register">criar uma conta</Link>
      </Form>
    </Container>
  );
}
