import { useEffect, useState } from 'react';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Homepage from '../components/Homepage';
import { FaOpencart } from "react-icons/fa";
import '../components/style/home.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const HOME_PAGE = 'home';

function Home() {
    const [page, setPage] = useState(PAGE_PRODUCTS)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
  
    const getDetails = async () => {
          const data = await fetch(
            'https://fakestoreapi.com/products'
          );
          const response = await data.json();
          setProducts(response);
    }
  
    useEffect(() => {
      getDetails();
    }, []);
  
    const addToCart = (product) => {
      setCart([...cart, { ...product }]);
      
    };
  
    const removeFromCart = (productToRemove) => {
      setCart(cart.filter((product) => product !== productToRemove))
    }
  
    const navigateTo = (nextPage) => {
      setPage(nextPage);
    }

  return (
    <div className='home'>
        <nav className='nav'>
            <button className='btn-home' onClick={() => navigateTo(HOME_PAGE)}>Home</button>
            <button className='btn-product' onClick={() => navigateTo(PAGE_PRODUCTS)}>Products</button>
            <button className='btn-cart' onClick={() => navigateTo(PAGE_CART)}><FaOpencart /> {cart.length}</button>
        </nav>
        {page === PAGE_PRODUCTS && <Product productItem={products}
                                        addToCart={addToCart} />}
        {page === PAGE_CART && <Cart cartItem={cart}
                                  removeFromCart={removeFromCart} />}
        {page === HOME_PAGE && <Homepage />}
    </div>
  )
}

export default Home