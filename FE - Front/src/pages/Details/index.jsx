//
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { IngredientCard } from "../../components/IngredientCard"

import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { TfiReceipt } from 'react-icons/tfi';

import { Container, Content, Main, Ingredients, PurchaseSection } from "./styles"

export function Details () {
  const [data, setData] = useState(null);
  const params = useParams();
  
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${params.id}`);
      setData(response.data);
    }
    fetchMeal();
  }, []);

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
            <img src={imageURL} alt="Imagem do prato" />
          </div>

          {data && (
            <Main>
            <div className="infos">
              <h1>{data.title}</h1>
              <h2>{data.description}</h2>
            </div>

            <Ingredients>
              {data.ingredients.map((ingredient) => (
                <IngredientCard
                key={ingredient.id}
                ingredient={ingredient.name}
                />
              ))}
            </Ingredients>

            <PurchaseSection>
              <h1>R$ {data.price}</h1>
            
              <div className="productQuantity">
                <ButtonText icon={AiOutlineMinus} />
                <span>01</span>
                <ButtonText icon={AiOutlinePlus} />

                <Button title="Incluir" icon={TfiReceipt} className="includeBtn" />
              </div>

            </PurchaseSection>
            
            </Main>
          )}

      </Content>

      <Footer/>
    </Container>
  )
}