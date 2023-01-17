import logo from "../../assets/logoBlue.svg"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Container, Logo, Form } from "./styles";

export function SignUp(){
  return(
    <Container>
      <Logo>
        <div className="logo">
            <img src={logo} alt="Logo do Food Explorer"/>
            <h1>Food Explorer</h1>
        </div>
      </Logo>

      <Form>
        <h1>Crie sua conta</h1>

        <div className="inputs">
          <p>Seu nome</p>
          <Input placeholder="Exemplo: Maria da Silva" />
        </div>

        <div className="inputs">
          <p>Email</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input placeholder="No mínimo 6 caracteres" />
        </div>

        <Button title="Crie a sua conta" />

        <ButtonText title="Já tenho uma conta"/>

      </Form>
    </Container>
  )
}