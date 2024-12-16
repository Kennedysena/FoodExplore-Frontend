import { Container } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Section({ title, children, onPrevious, onNext }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <button onClick={onPrevious}>
          <FiChevronLeft />
        </button>
        {children}
        <button onClick={onNext}>
          <FiChevronRight />
        </button>
      </div>
    </Container>
  );
}
