import '../components/style/cart.css';
import PropTypes from 'prop-types'

function Cart({ cartItem, removeFromCart, total }) {
  
  return (
    <div className='cart-wrapper'>
        <h1>Cart</h1>
        {cartItem.length === 0 && <h3>Your basket is empty</h3>}
        <div className="carts">
          {cartItem.map((product, idx) => {
              return (
              <div 
                  className="cart-product" 
                  key={idx}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <div className='button'>
                    <button onClick={() => removeFromCart(product)}>Remove</button>
                  </div>
                  <h4>£{product.price}</h4>
              </div>
              )
          })}
          <h2>Total: {total()}</h2>
        </div>
    </div>
  )
}

Cart.propTypes = {
  cartItem: PropTypes.arrayOf(PropTypes.object),
  removeFromCart: PropTypes.func,
  total: PropTypes.func,
}

export default Cart