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
import { register } from "swiper/element/bundle";

import { Container, Content } from "./styles";

register();

export function Home() {
  
  return (
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

          <Content>
            <Section title="Refeições">
              <swiper-container
                slides-per-view="auto" 
                space-between="27" 
                navigation="true"
                pagination="true"
                loop="true"
                grab-cursor="true"
              >
                <swiper-slide>
                  <Card
                    img={Gambe}
                    title="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto"
                    price="R$ 79,97"
                  />
                </swiper-slide>
                <swiper-slide>
                  <Card
                    img={Gambe}
                    title="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto"
                    price="R$ 79,97"
                  />
                </swiper-slide>
                <swiper-slide>
                  <Card
                    img={Ravanello}
                    title={"Salada Ravanelo"}
                    description="Sabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    price="R$ 79,97"
                  />
                </swiper-slide>
                <Card
                  img={Ravanello}
                  title={"Salada Ravanelo"}
                  description="Sabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                  price="R$ 79,97"
                />
              </swiper-container>
            </Section>

            <Section title="Sobremesas" onPrevious={() => {}} onNext={() => {}}>
              <swiper-container>
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
              </swiper-container>
            </Section>

            <Section title="Bebidas">
              <swiper-container>
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
              </swiper-container>
            </Section>
          </Content>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
