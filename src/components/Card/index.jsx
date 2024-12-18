import { Container, Title, Order } from "./styles";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { Number } from "../Number";
export function Card({ img, title, description, price }) {
  return (
    <Container>
      <FiHeart />
      <img src={img} alt="Imagem do prato"/>
      <Title>
        <h2>{title}</h2>
        <RxCaretRight />
      </Title>
      <p>{description}</p>
      <span>{price}</span>
      <Order>
        <Number />
        <button>incluir</button>
       </Order>
    </Container>
  );
}
