//
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

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

  const {user} = useAuth();
  
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

  function handleEdit() {
    navigate(`/edit/${data.id}`)
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

                {user.isAdm ? (<Button title="Editar prato" className="editBtn" onClick={handleEdit} />) : 

                (
                  <div className="productQuantity">
                      <ButtonText icon={AiOutlineMinus} />
                      <span>01</span>
                      <ButtonText icon={AiOutlinePlus} />

                      <Button title={`Pedir ∙ R$ ${data.price}`} className="includeBtn" />
                  </div>
                )}

            </PurchaseSection>
            
            </Main>
          )}

      </Content>

      <Footer/>
    </Container>
  )
}