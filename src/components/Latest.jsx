import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css'
import styled from 'styled-components';

function Latest() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        const data = await fetch(`https://fakestoreapi.com/products?limit=6`);
        const dataResult = await data.json();
        setProducts(dataResult);
    }
  return (
    <div>
        <Wrapper>
            <h2>Latest</h2>  
            <Splide options={{
                perPage: 3,
                pagination: false,
                drag: "free",
                gap: '5rem'
            }}>
                {products.map((product) => {
                    return (
                        <SplideSlide key={product.id}>
                            <Card>
                                <Link to={"/product/" + product.id}>
                                    <p>{product.title}</p>
                                    <img src={product.image} alt={product.description} />
                                <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>
  )
}

export default Latest;

const Wrapper = styled.div`
    margin: 2rem 0rem;

    h2 {
        text-align: center;
    }
`;

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: -10%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`;