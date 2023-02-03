import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Button } from "../../components/Header/styles";
import { Footer } from "../../components/Footer"
import { Textarea } from "../../components/Textarea";
import { Noteitem } from "../../components/Noteitem";
import { ButtonText } from "../../components/ButtonText"

import { AiOutlineLeft } from "react-icons/ai"
import { FiUpload } from "react-icons/fi"

import { Container, Content, Form, IngredientsSection } from "./styles";


export function New() {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const {user} = useAuth();

  const navigate = useNavigate();


  function handleAddIngredients() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewMeal() {
    if(!image) {
      return alert("Defina uma imagem para o prato!")
    }

    if(!title) {
      return alert("Defina uma título para o prato!")
    }

    if(!category) {
      return alert("Defina uma categoria para o prato!")
    }

    if(!price) {
      return alert("Defina um preço para o prato!")
    }

    if(!description) {
      return alert("Defina uma descrição para o prato!")
    }

    if(newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar! Clique no + para adicionar ou deixe vazio.")
    }

    if(ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente ao prato!");
    }

    const data = new FormData();

    data.append("image", image)
    data.append("title", title)
    data.append("category", category)
    data.append("price", price)
    data.append("description", description)
    
    ingredients.map(ingredient => data.append("ingredients", ingredient))

    api.post("/meals", data);
  
    alert("Prato cadastrado com sucesso!");

  }

  function handleHome() {
    navigate("/")
  }

  return(
    <Container>
      <Header/>

        {user.isAdm && (
          
            <Content>
              <header>
                <ButtonText title="Voltar" icon={AiOutlineLeft} className="textBtn" onClick={handleHome} />
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
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                    </label>
                  </div>

                  <div className="titleBox">
                    <p>Nome</p>
                    <Input placeholder="Ex: Salada Ceasar" className="input" type="text" onChange={(e) => setTitle(e.target.value)} />
                  </div>

                  <div className="categoryBox">
                    <p>Categoria</p>
                    <Input className="input" type="text" onChange={(e) => setCategory(e.target.value)} />
                  </div>
                </div>
                
                <div className="inputWrapper">
                
                  <IngredientsSection>
                    <span>Ingredientes</span>
                    <div className="ingredientsBox">
                      {
                        ingredients.map((ingredient, index) => (
                          <Noteitem 
                          key={String(index)}
                          value={ingredient}
                          onClick={() => handleRemoveIngredients(ingredient)}
                           />
                        ))
                      }
                      <Noteitem 
                      isNew 
                      placeholder="Adicionar"
                      value={newIngredient}
                      onChange={e => setNewIngredient(e.target.value)}
                      onClick={handleAddIngredients}
                       />
                    </div>
                  </IngredientsSection>

                  <div className="priceBox">
                    <p>Preço</p>
                    <Input placeholder="R$ 00,00" className="input" type="text" onChange={(e) => setPrice(e.target.value)} />
                  </div>
                </div>

                <div className="textArea">
                  <p>Descrição</p>
                  <Textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)} 
                  />
                </div>

                  <div className="btnWrapper">
                    <Button className="saveBtn" onClick={handleNewMeal} >
                    <p>Salvar prato</p>
                  </Button>
                  </div>
              
              </Form>

            </Content>
          
        )}

      <Footer/>
    </Container>
  )
}