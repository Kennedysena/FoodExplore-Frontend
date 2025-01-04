import { Container, Form } from "./styles";
import Logo from "../../assets/food explorer.svg";
import { Brand } from "../SignIn/styles";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="Logo" />
      </Brand>
      <Form>
        <h1>Crie sua conta</h1>
        <Section title="Nome" marginBottom="0.8rem" theme={"#C4C4CC"}>
          <Input placeholder="Exemplo: Maria da Silva" type="text" />
        </Section>
        <Section title="Email" marginBottom="0.8rem" theme={"#C4C4CC"}>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </Section>
        <Section title="Senha" marginBottom="0.8rem" theme={"#C4C4CC"}>
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </Section>
        <ButtonText title={"Criar conta"} />
        <Link to="/">Já tem uma conta</Link>
      </Form>
    </Container>
  );
}
