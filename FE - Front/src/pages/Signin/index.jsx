import { useState } from "react"

import logo from "../../assets/logoBlue.svg"

import { Link } from "react-router-dom"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { useAuth } from "../../hooks/auth"

import { Container,Form } from "./styles";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  return(
    <Container>

        <div className="logo">
            <img src={logo} alt="Logo do Food Explorer"/>
            <h1>Food Explorer</h1>
        </div>

      <Form>
        <h1>Faça login</h1>

        <div className="inputs">
          <p>Email</p>
          <Input 
            type="text" 
            placeholder="Digite o seu E-mail" 
            onChange = {e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input 
            type="password" 
            placeholder="Digite a sua senha" 
            onChange = {e => setPassword(e.target.value)}

          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register" className="textBtn">
          <ButtonText title="Criar uma conta"  />
        </Link>

      </Form>
    </Container>
  )
}