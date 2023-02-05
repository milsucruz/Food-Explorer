import { Container } from "./styles";

export function IngredientCard({ingredient}) {
  return(
    <Container>
      <span className="ingredient-name">{ingredient}</span>
    </Container>
  )
}