//
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"

import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { TfiReceipt } from 'react-icons/tfi';

import { Container, Content, Main, Ingredients, PurchaseSection } from "./styles"


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
            
          </div>

        <Main>
            <div className="infos">
              <h1>Salada Ravanello</h1>
              <h2>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h2>
            </div>

          <Ingredients>
            <div className="ingredientSection">
              
              <p>alface</p>
            </div>

            <div className="ingredientSection">
              
              <p>tomate</p>
            </div>

            <div className="ingredientSection">
              
              <p>rabanete</p>
            </div>

            <div className="ingredientSection">
              
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