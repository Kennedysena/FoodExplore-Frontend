import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import Bolo from "../../assets/Mask group.svg";
import Gambe from "../../assets/Gambe.svg";
import Pastry from "../../assets/Pastry.svg";
import Macaroons from "../../assets/Macaron.svg";
import Prune from "../../assets/Prune.svg";
import Juice from "../../assets/Juice.svg";
import Tea from "../../assets/Tea.svg";
import Ravanello from "../../assets/Ravanello.svg";

import { Container, Content } from "./styles";

export function Home() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <div>
            <header>
              <img src={Bolo} alt="" />
              <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </div>
            </header>
          </div>
        </main>
        <Content>
          <Section title="Refeições">
            <div>
              <Card
                img={Gambe}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto"
                price="R$ 79,97"
              />
              <Card
                img={Gambe}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto"
                price="R$ 79,97"
              />
              <Card
                img={Ravanello}
                title={"Salada Ravanelo"}
                description="Sabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                price="R$ 79,97"
              />
            </div>
          </Section>
          <Section title="Sobremesas" onPrevious={() => {}} onNext={() => {}}>
            <div>
              <Card
                img={Prune}
                title="Prugna Pie"
                description="Torta de ameixa com massa amanteigada, polvilho em  açúcar."
                price={"R$ 79,97"}
              />
              <Card
                img={Pastry}
                title="Peachy pastrie"
                description="Delicioso folheado e pêssego com folhas de hortelã"
                price={"R$ 32,97"}
              />
              <Card
                img={Macaroons}
                title={"Macarons"}
                description="Farinha de amêndoas, manteiga, claras e açúcar"
                price={"R$ 79,97"}
              />
            </div>
          </Section>
          <Section title="Bebidas">
            <div>
              <Card
                img={Juice}
                title="Suco de Maracujá"
                description="Suco de maracujar gelado, cremoso, docinho "
                price={"R$ 13,97"}
              />
              <Card
                img={Juice}
                title="Suco de Maracujá"
                description="Suco de maracujar gelado, cremoso, docinho "
                price={"R$ 13,97"}
              />
              <Card
                img={Juice}
                title="Suco de Maracujá"
                description="Suco de maracujar gelado, cremoso, docinho "
                price={"R$ 13,97"}
              />
              <Card
                img={Tea}
                title="Tè d´autunno"
                description="Chá de anis, canela e limão. Sinta outono italiano."
                price={"R$ 19,97"}
              />
              <Card />
            </div>
          </Section>
          <Footer />
        </Content>
      </Container>
    </>
  );
}
