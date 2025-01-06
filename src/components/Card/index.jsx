import { Container, Brand, Title, Order, Button } from "./styles";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { Number } from "../Number";
export function Card({ img, title, description, price }) {
  return (
    <Container>
      <FiHeart />
      <Brand to="/dish">
        <img src={img} alt="Imagem do prato" />
      </Brand>
      <Title to="/dish">
        <h2>{title}</h2>
        <RxCaretRight size={35} />
      </Title>
      <p>{description}</p>
      <span>{price}</span>
      <Order>
        <Number />
        <Button>incluir</Button>
      </Order>
    </Container>
  );
}
