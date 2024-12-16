import { Container } from "./styles";
import { FiPlus, FiMinus } from "react-icons/fi";
export function Card({ img, title, description, price }) {
  return (
    <Container>
      <img src={img} alt="" />
      <span>{title}</span>
      <p>{description}</p>
      <h4>{price}</h4>
      <div>
        <FiPlus />
        <p>01</p>
        <FiMinus />
        <button>incluir</button>
      </div>
    </Container>
  );
}
