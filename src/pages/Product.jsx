import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { CiHeart } from "react-icons/ci";

function Product() {

  let params = useParams();
  const [clickedProduct, setClickedProduct] = useState([]);

  const getClickedProduct = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const dataResult = await data.json();
      setClickedProduct(dataResult);
  }

  useEffect(() => {
      getClickedProduct(params.id);
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{clickedProduct.title}</h2>
        <img src={clickedProduct.image} alt={clickedProduct.description} />
        <h3>£{clickedProduct.price}</h3>
      </div>
        <Brick>
          <CiHeart />
          <button>Add</button>
        </Brick>
    </DetailWrapper>
  )
}

export default Product;

const DetailWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  img {
    max-width: 25rem;
  }

  svg {
    margin-top: 1rem;
    font-size: 3rem;
  }

  svg:hover {
    cursor: pointer;
    color: pink;
  }

  svg:active {
    color: pink;
  }
`;

const Brick = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;

  button {
    border: 1px solid;
  }

  button:hover {
    color: blue;
  }
` 