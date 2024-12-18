import { FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "./styles";

export function Number() {
  return (
    <Container>
      <button>
        <FiMinus />
      </button>
      <span>1</span>
      <button>
        <FiPlus />
      </button>
    </Container>
  );
}
