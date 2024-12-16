import { Container } from "./styles";
import Logo from "../../assets/Group 5946.svg";

export function Footer() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <p>2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
