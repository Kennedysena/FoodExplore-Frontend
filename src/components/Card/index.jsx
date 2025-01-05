import { Container, Title, Order, Button } from "./styles";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { Number } from "../Number";
import { Link } from "react-router-dom";
export function Card({ img, title, description, price }) {
  return (
    <Container>
      <FiHeart />
      <img src={img} alt="Imagem do prato" />
      <Title>
        <h2>{title}</h2>
        <Link to="/dish">
          <RxCaretRight size={24}/>
        </Link>
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
