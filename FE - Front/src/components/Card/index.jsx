import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom";

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import { Container, Content, PurchaseSection } from "./styles";
import {AiOutlineHeart, AiFillHeart, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

import dishe from '../../assets/spaguetti.png'


export function Card({ meal }) {

  const imageURL = `${api.defaults.baseURL}/files/${meal.image}`;

  const {user} = useAuth();

  return(
    <Container >
      <Content>

        {user.isAdm ? (
        <button className="fav">
          <BiPencil/>
        </button>
        )
         :
        (
        <button className="fav">
        <AiOutlineHeart/>
        </button>) }

       <div className="product">
          <img src={imageURL} alt="" />
          <h2 className="productTitle" > {meal.title} </h2>
          <p className="productDescription" > {meal.description} </p>
          <h1 className="productPrice" > {meal.price} </h1>

          {user.isAdm ? ("") :
          (
            <PurchaseSection>
            <div className="productQuantity">
              <ButtonText icon={AiOutlineMinus} />
              <span>01</span>
              <ButtonText icon={AiOutlinePlus} />
            </div>

            <Button title="Incluir"/>
          </PurchaseSection>
          )
          }

       </div>
      </Content>
    </Container>
  )
}