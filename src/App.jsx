import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';
import Bag from './pages/Bag';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FcCloth } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <div> 
            <Logo to={'/'}>
              <FcCloth />
              JS</Logo>
          </div>
          <Icons>
            <MdAccountCircle />
            <Bag />
          </Icons>
        </Nav>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 4rem;
  }

  div {
    display: flex;
    align-items: center;
  }
`

const Icons = styled.div`
  display: flex
  justify-content: center;
  align-items: center;
  gap: 10px;

svg {
  font-size: 2rem;
}

svg: hover {
  color: #ADD8E6;
  cursor: pointer;
}
  
`
