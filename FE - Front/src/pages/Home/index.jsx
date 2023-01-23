import bannerImg from "../../assets/cover.png"
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";

import { Container, Content, Banner, Slogan, Menu } from "./styles";

export function Home() {
  return(
    <Container>
        <Header/>
          <Content>

            <Banner>
              <img src={bannerImg} alt="Banner do Food Explorer" />
              
              <Slogan>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </Slogan>
            </Banner>

            <Menu>
              <Carousel/>
              <Carousel/>
              <Carousel/>
            </Menu>

          </Content>
      <Footer/>
    </Container>
  )
}