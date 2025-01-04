import { Container } from "./styles";


export function Section({ title, children, marginBottom, theme}) {
  return (
    <Container
      marginBottom={marginBottom}
      color={theme}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
