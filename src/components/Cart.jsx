

import React from 'react'

function Cart({ cartItem, removeFromCart}) {
  return (
    <div>
        <h1>Cart</h1>
        <div className="carts">
        {cartItem.map((product) => {
            return (
            <div 
                className="product" 
                key={product.id}
                style={{'width': '120px'}}>
                <img src={product.image} alt={product.title} style={{'width':'120px'}} />
                <h3>{product.title}</h3>
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default Cart