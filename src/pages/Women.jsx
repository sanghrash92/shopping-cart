import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Women() {
    const [womenProduct, setWomenProduct] = useState([]);

    const getMenProducts = async () => {
        const data = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        const result = await data.json();
        setWomenProduct(result);
    };

    useEffect(() => {
        getMenProducts();
    }, []);
  return (
    <Wrapper>
        {womenProduct.map((product) => {
            return (
                <Card key={product.id}>
                    <Link to={'/product/' + product.id}>
                        <img src={product.image} alt={product.description} />
                        <p>{product.title}</p>
                    </Link>
                </Card>
            )
        })}
    </Wrapper>
  )
}

export default Women;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    justify-items: center;
    gap: 15px;
`;

const Card = styled.div`
    border-radius: 2rem;
    border: 1px solid red;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 11rem;
    }
`;