//Imports
import logo from '../../assets/logoBlue.svg'
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { TfiReceipt } from 'react-icons/tfi';
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Container, Content, Logo, Search, Button, LogOut} from "./styles";

export function Header() {
  const {user} = useAuth();
  const { signOut } = useAuth();
  const navigate = useNavigate();

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
              <input type="text" placeholder='Busque por pratos ou ingredientes' />
            </label>
          </Search>

          {user.isAdm 
          ? 
          (<Button type='button' onClick={handleNewMeal} ><p>Novo prato</p> </Button>) 
          : 
          (<Button type='button'> <TfiReceipt size={24}/> <p>Meu pedido (0)</p> </Button>)
          }

          <LogOut onClick={signOut} >
            <FiLogOut/>
          </LogOut>
       
        </div>


      </Content>
    </Container>
  );
}