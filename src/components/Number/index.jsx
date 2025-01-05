import { FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "./styles";

export function Number() {
  return (
    <Container>
      <button>
        <FiMinus size={24}/>
      </button>
      <span>01</span>
      <button>
        <FiPlus size={24}/>
      </button>
    </Container>
  );
}
