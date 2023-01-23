import logo from "../../assets/logoBlue.svg"

import { Link } from "react-router-dom"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Logo, Form } from "./styles";

export function SignIn(){
  return(
    <Container>
      <Logo>
        <div className="logo">
            <img src={logo} alt="Logo do Food Explorer"/>
            <h1>Food Explorer</h1>
        </div>
      </Logo>

      <Form>
        <h1>Faça login</h1>

        <div className="inputs">
          <p>Email</p>
          <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input type="password" placeholder="No mínimo 6 caracteres" />
        </div>

        <Button title="Entrar" />

        <Link to="/register" className="textBtn">
          <ButtonText title="Criar uma conta"  />
        </Link>

      </Form>
    </Container>
  )
}