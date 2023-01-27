import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { Button } from "../Button"
import { ButtonText } from "../ButtonText"
import { Container, Content, PurchaseSection } from "./styles";
import {AiOutlineHeart, AiFillHeart, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

import dishe from '../../assets/spaguetti.png'


export function Card({ data, ...rest }) {

  const {user} = useAuth();

  return(
    <Container {...rest} >
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
          <img src={dishe} alt="" />
          <h2 className="productTitle" >Spaguetti Gambe</h2>
          <p className="productDescription" >Massa fresca com camarões e pesto.</p>
          <h1 className="productPrice" >R$ 79,97</h1>

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