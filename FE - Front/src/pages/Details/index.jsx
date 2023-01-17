//
import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function Details () {
  return(
    <Container>
      <Header/>
      <Button title="Test Button" />
      <ButtonText title="Test ButtonText" />
    </Container>
  )
}