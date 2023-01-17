//Imports
import logo from '../../assets/logoBlue.svg'
import { TfiReceipt } from 'react-icons/tfi';
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Container, Content, Logo, Search, Button, LogOut} from "./styles";

export function Header() {
  return(
    <Container>
      <Content>

        <Logo>
          <div className="logo" >
            <a href="#">
              <img src={logo} alt="Logo do Food Explorer"/>
              <h1>Food Explorer</h1>
            </a>
          </div>
        </Logo>

        <div className="menuNavigation">
          <a href="#">Meus Favoritos</a>


          <Search>
            <label>
              <FiSearch size={24}/>
              <input type="text" placeholder='Busque pelas opções de pratos' />
            </label>
          </Search>

          <Button type='button' >
            <TfiReceipt size={24}/>
            <p>Meu pedido (0)</p>
          </Button>

          <LogOut>
            <FiLogOut/>
          </LogOut>
       
        </div>


      </Content>
    </Container>
  );
}