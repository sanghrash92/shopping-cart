import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <NavLink to={'/Men/'}>
        <h4>Men</h4>
      </NavLink>
      <NavLink to={'/Women/'}>
        <h4>Women</h4>
      </NavLink>
    </List>
  )
}

export default Category;

const List = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  h4 {
    color: black;
    font-size: 1.5rem;
  }

  h4:hover {
    color: blue;
  }
`