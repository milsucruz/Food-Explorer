import { Container, Content, PurchaseSection } from "./styles";
import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import {AiOutlineHeart, AiFillHeart, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import dishe from '../../assets/spaguetti.png'

export function Card() {
  return(
    <Container>
      <Content>

        <button className="fav">
          <AiOutlineHeart/>
        </button>

       <div className="product">
          <img src={dishe} alt="" />
          <h2 className="productTitle" >Spaguetti Gambe</h2>
          <p className="productDescription" >Massa fresca com camarões e pesto.</p>
          <h1 className="productPrice" >R$ 79,97</h1>

          <PurchaseSection>
            <div className="productQuantity">
              <ButtonText icon={AiOutlineMinus} />
              <span>01</span>
              <ButtonText icon={AiOutlinePlus} />
            </div>

            <Button title="Incluir"/>
          </PurchaseSection>

       </div>
      </Content>
    </Container>
  )
}