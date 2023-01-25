import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea";
import { Footer } from "../../components/Footer"

import { AiOutlineLeft } from "react-icons/ai"
import { FiUpload } from "react-icons/fi"

import { Container, Content, Form } from "./styles";


export function New() {

  const {user} = useAuth();

  return(
    <Container>
      <Header/>

        {user.isAdm && (
          
            <Content>
              <header>
                <ButtonText title="Voltar" icon={AiOutlineLeft} className="textBtn" />
                <h1 className="title" >Adicionar prato</h1>
              </header>

              <Form>

                <div className="inputWrapper">
                  
                  <div className="imageBox">
                    <label id="file" htmlFor="image">
                      Imagem do prato
                      <div>
                        <FiUpload size={24} />
                        <span>Selecione a imagem</span>
                        <input
                          id="image"
                          type="file"
                          onChange={(e) => setImageFile(e.target.files[0])}
                        />
                      </div>
                    </label>
                  </div>

                  <div className="nameBox">
                    <p>Nome</p>
                    <Input placeholder="Ex: Salada Ceasar" className="input" />
                  </div>

                  <div className="categoryBox">
                    <p>Categoria</p>
                    <Input className="input" />
                  </div>
                </div>
                
                <div className="inputWrapper">
                  <div className="ingredientsBox">
                    <p>Ingredientes</p>
                    <Input placeholder="Ex: Salada Ceasar" className="input" />
                  </div>

                  <div className="priceBox">
                    <p>Preço</p>
                    <Input placeholder="R$ 00,00" className="input" />
                  </div>
                </div>

                <div className="textArea">
                  <p>Descrição</p>
                  <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                </div>
              </Form>
            </Content>
          
        )}

      <Footer/>
    </Container>
  )
}