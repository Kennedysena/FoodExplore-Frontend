import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Number } from "../../components/Number";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Container, Content } from "./styles";
import Ravanello from "../../assets/Ravanello.svg";
import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Dish() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <header>
            <ButtonText >
              <RxCaretLeft size={45} />
             <Link to="/">voltar</Link>
            </ButtonText>
          </header>

          <Content>
            <img src={Ravanello} alt="" />
            <div>
              <h1>Salada Ravanello</h1>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim. O pão naan dá um toque especial.
              </p>
              <section>
                <Tag title="alface" />
                <Tag title="cebola" />
                <Tag title="pão naan" />
                <Tag title="pepino" />
                <Tag title="rabanete" />
                <Tag title="tomate" />
                <Tag title="tomate" />
              </section>
              <div className="price">
                <Number />
                <Button title="incluir  ∙ " price="R$ 25,00" />
              </div>
            </div>
          </Content>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
