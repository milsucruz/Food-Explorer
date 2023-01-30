//Imports
import logo from '../../assets/logoBlue.svg'
import { api } from "../../services/api"
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { TfiReceipt } from 'react-icons/tfi';
import { FiSearch, FiLogOut } from 'react-icons/fi'

import { Container, Content, Logo, Search, Button, LogOut} from "./styles";

export function Header({ setMeals }) {
  const {user} = useAuth();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const [search, setSearch] = useState("")

  useEffect(() => {
    if(search.length > 0 && window.location.pathname == '/') {
      const fetchMeals = async () => {  
        const response = await api.get(`/meals?title=${search}`)
    
        setMeals(response.data)
      }
      fetchMeals()
    } else if(search.length == 0 ){
      if(setMeals){
      const fetchMeals = async () => {
        const response = await api.get(`/meals`)

        setMeals(response.data)
      }
      fetchMeals()
      }
    }
  }, [search])

  function handleNewMeal () {
    navigate("/new")
  }

  return(
    <Container>
      <Content>

        {user.isAdm ? (
                  <Logo>
                  <div className="logo" >
                    <a href="/">
                      <img src={logo} alt="Logo do Food Explorer"/>
                      <h1>Food Explorer</h1>
                    </a>
                    <p>admin</p>
                  </div>
                </Logo>
        ) : (
          <Logo>
          <div className="logo" >
            <a href="/">
              <img src={logo} alt="Logo do Food Explorer"/>
              <h1>Food Explorer</h1>
            </a>
          </div>
        </Logo>
        )}

        <div className="menuNavigation">
          
          {user.isAdm ? 
          (<a href="#"></a>) : (<a href="#">Meus Favoritos</a>)
          }

          <Search>
            <label>
              <FiSearch size={24}/>
              <input type="text" placeholder='Busque por pratos ou ingredientes' onChange={(e) => setSearch(e.target.value)} />
            </label>
          </Search>

          {user.isAdm 
          ? 
          (<Button type='button' onClick={handleNewMeal} ><p>Novo prato</p> </Button>) 
          : 
          (<Button type='button'> <TfiReceipt size={24}/> <p>Pedidos(0)</p> </Button>)
          }

          <LogOut onClick={signOut} >
            <FiLogOut/>
          </LogOut>
       
        </div>


      </Content>
    </Container>
  );
}