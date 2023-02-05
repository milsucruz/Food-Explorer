//Imports
import logo from '../../assets/logoBlue.svg'
import { api } from "../../services/api"
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { TfiReceipt } from 'react-icons/tfi';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'

import { Container, Menu, Logo, Search } from "./styles";

export function NavBar({ setMeals }) {
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

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return(
    <Container>
    
      <Menu>
        <div className="display">
          <button className="nav-btn" onClick={showNavBar} >
            <FiMenu size={24} />
          </button>
          <div>
            {
              user.isAdm ? 
              (
                <Logo>
                    <a href="/">
                      <img src={logo} alt="Logo do Food Explorer"/>
                      <h1>Food Explorer</h1>
                    <p>admin</p>
                    </a>
                </Logo> 
              ) :
              (
                <Logo>
                    <a href="/">
                      <img src={logo} alt="Logo do Food Explorer"/>
                      <h1>Food Explorer</h1>
                    </a>
                </Logo> 
              )
            }
          </div>

          <div>
            {
              user.isAdm ?
              (
                ""
              ) :
              (
                <TfiReceipt size={24} />
              )
            }
          </div>
        </div>
        

        <nav ref={navRef} >

          <div className="close-menu">
            <button className="nav-btn nav-close-btn" onClick={showNavBar} >
              <FiX size={24} />
            </button>
            <p>Menu</p>
          </div>

          <div className="listMenu">
            <Search>
              <label>
                <FiSearch size={24}/>
                <input type="text" placeholder='Busque por pratos ou ingredientes' onChange={(e) => setSearch(e.target.value)} />
              </label>
            </Search>

            <div className="textMenu">
              {
                user.isAdm ? 
                (
                  <button onClick={handleNewMeal} >
                    <p>Novo prato</p>
                  </button>
                ) :
                (
                  ""
                )
              }
              
              <button onClick={signOut} >
                <p>Sair</p>
              </button>

              </div>
          </div>

        </nav>

      </Menu>

    </Container>
  );
}