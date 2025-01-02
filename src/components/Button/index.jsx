import { ButtonInclude } from "./styles";

export function Button({ title, price, ...rest }) {
  return (
    <ButtonInclude {...rest}>
      {title}
      {price}
    </ButtonInclude>
  );
}
