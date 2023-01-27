import { Container, Card } from "./styles";
import {api} from "../../services/api";
import { useState } from "react";


export function IngredientCard({ingredient}) {
  return(
    <Container>
      <span className="ingredient-name">{ingredient}</span>
    </Container>
  )
}