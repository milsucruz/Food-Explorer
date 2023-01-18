//
import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"

export function Details () {
  return(
    <Container>
      <Header/>
      <Button title="Test Button" />
      <ButtonText title="Test ButtonText" />
      <Input placeholder="Test"/>
      <Footer/>
    </Container>
  )
}