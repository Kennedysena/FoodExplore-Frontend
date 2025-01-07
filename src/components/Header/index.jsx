import { Container, Logout, PedidosButton, Brand } from "./styles";
import Logo from "../../assets/food explorer.svg";
import { FiLogOut } from "react-icons/fi";
import { Search } from "../Search";
import { TbReceipt } from "react-icons/tb";


export function Header() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="logo" />
      </Brand>
      <Search />
      <PedidosButton to="/payment">
        <TbReceipt size={24} />
        Pedidos (0)
      </PedidosButton>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
