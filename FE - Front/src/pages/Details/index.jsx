//
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"

import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { TfiReceipt } from 'react-icons/tfi';

import { Container, Content, Main, Ingredients, PurchaseSection } from "./styles"

import product from "../../assets/ravanello.png"
import Ingredient1 from "../../assets/alface.png"
import Ingredient2 from "../../assets/tomate.png"
import Ingredient3 from "../../assets/rabanete.png"
import Ingredient4 from "../../assets/pao-naan.png"
import { useNavigate } from "react-router-dom"


export function Details () {

  const navigate = useNavigate();

  function handleHome() {
    navigate("/")
  }

  return(
    <Container>
      <Header/>

      <ButtonText title="Voltar" icon={AiOutlineLeft} className="textBtn" onClick={handleHome} />

        
      <Content>

          <div className="meal">
            <img src={product} alt="Prato" />
          </div>

        <Main>
            <div className="infos">
              <h1>Salada Ravanello</h1>
              <h2>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h2>
            </div>

          <Ingredients>
            <div className="ingredientSection">
              <img src={Ingredient1} alt="" />
              <p>alface</p>
            </div>

            <div className="ingredientSection">
              <img src={Ingredient2} alt="" />
              <p>tomate</p>
            </div>

            <div className="ingredientSection">
              <img src={Ingredient3} alt="" />
              <p>rabanete</p>
            </div>

            <div className="ingredientSection">
              <img src={Ingredient4} alt="" />
              <p>pão naan</p>
            </div>
          </Ingredients>

          <PurchaseSection>
            <h1>R$ 25,97</h1>
          
            <div className="productQuantity">
              <ButtonText icon={AiOutlineMinus} />
              <span>01</span>
              <ButtonText icon={AiOutlinePlus} />

              <Button title="Incluir" icon={TfiReceipt} className="includeBtn" />
            </div>

          </PurchaseSection>
          
        </Main>

      </Content>

      <Footer/>
    </Container>
  )
}