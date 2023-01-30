import bannerImg from "../../assets/cover.png"

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

import { Container, Content, Banner, Slogan, Menu } from "./styles";

export function Home() {
  const [meals, setMeals] = useState([])

  async function fetchMeals() {
    const response = await api.get(`/meals`);
    setMeals(response.data);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

console.log(meals)

  return(
    <Container>
        <Header setMeals={setMeals} />
          <Content>

            <Banner>
              <img src={bannerImg} alt="Banner do Food Explorer" />
              
              <Slogan>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </Slogan>
            </Banner>

            <Menu>
              {meals.filter((meal) => meal.category == "Pratos principais") && 
                (
                  <Carousel title="Pratos principais" >
                    {meals
                    .filter((meal) => meal.category == "Pratos principais")
                    .map((meal) => {
                      return(
                        <Card meal={meal} key={meal.id} />
                        )
                    })
                    }
                  </Carousel>
                )}

                {meals.filter((meal) => meal.category == "Sobremesas") && 
                (
                  <Carousel title="Sobremesas" >
                    {meals
                    .filter((meal) => meal.category == "Sobremesas")
                    .map((meal) => {
                      return(
                      <Card meal={meal} key={meal.id} />
                      )
                    })
                    }
                  </Carousel>
                )}

                {meals.filter((meal) => meal.category == "Bebidas") && 
                (
                  <Carousel title="Bebidas" >
                    {meals
                    .filter((meal) => meal.category == "Bebidas")
                    .map((meal) => {
                      return(
                        <Card meal={meal} key={meal.id} />
                        )
                    })
                    }
                  </Carousel>
                )}
            </Menu>

          </Content>
      <Footer/>
    </Container>
  )
}