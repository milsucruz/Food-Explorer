import { useState } from "react";

import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logoBlue.svg";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Logo, Form } from "./styles";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp () {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }

      else{
        alert("Não foi possível cadastrar!")
      }
    })
  }

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
          <Input 
            type="text" 
            placeholder="Exemplo: Maria da Silva" 
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Email</p>
          <Input 
            type="text" 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Senha</p>
          <Input 
            type="password"
            placeholder="No mínimo 6 caracteres" 
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Crie a sua conta" onClick={handleSignUp} />

        <Link to="/" className="textBtn">
          <ButtonText title="Já tenho uma conta"/>
        </Link>

      </Form>
    </Container>
  )
}