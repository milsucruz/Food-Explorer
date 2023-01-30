import { Container, Slider } from "./styles";
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Card } from "../Card"

export function Carousel({ title }) {
  const [meals, setMeals] = useState([]);
  async function fetchMeals() {
    const response = await api.get(`/meals`);
    setMeals(response.data);
  }

  useEffect(() => {
    fetchMeals();
  }, [])

  return(
    <Container>
      <h2> {title} </h2>

        <Slider>
          <button className="leftBtn">
            <AiOutlineLeft size={40} />
          </button>

          <div className="productMenu"> 
            {meals.map((meal) => {
              return(
                <Card meal={meal} key={meal.id} />
              )
            })}
          </div>

          <button className="rightBtn">
            <AiOutlineRight size={40} />
          </button>
        </Slider>
    </Container>
  )
}