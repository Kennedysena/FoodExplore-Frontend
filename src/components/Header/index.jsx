import { Container, Logout, PedidosButton, Brand } from "./styles";
import Logo from "../../assets/food explorer.svg";
import { FiLogOut } from "react-icons/fi";
import { Search } from "../Search";
import { TbReceipt } from "react-icons/tb";

// import Sair from "../../assets/SignOut.svg"

export function Header() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="logo" />
      </Brand>
      <Search />
      <PedidosButton>
        <TbReceipt size={24} />
        Pedidos (0)
      </PedidosButton>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
