import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Men() {

    const [menProduct, setMenProduct] = useState([]);

    const getMenProducts = async () => {
        const data = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        const result = await data.json();
        setMenProduct(result);
        console.log(menProduct)
    };

    useEffect(() => {
        getMenProducts();
    }, []);
    
  return (
    <Wrapper>
        {menProduct.map((product) => {
            return (
                <Card key={product.id}>
                    <Link to={'/product/' + product.id} >
                        <div>
                            <img src={product.image} alt={product.description} />
                            <h4>£{product.price}</h4>
                            <p>{product.title}</p>
                        </div>
                    </Link>
                </Card>
            )
        })}
    </Wrapper>
  )
}

export default Men;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    justify-items: center;
    gap: 15px;
`;

const Card = styled.div`
border-radius: 2rem;
width: 500px;
position: relative;
flex-direction: column;

div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

img {
    width: 50%;
}
`;
