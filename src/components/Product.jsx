import '../components/style/products.css'

function Product({ productItem, addToCart }) {
  return (
    <div className='wrapper'>
    <h1>Products</h1>
        <div className="products">
        {productItem.map((product) => {
            return (
            <div 
                className="product" 
                key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <button onClick={() => addToCart(product)}>Add</button>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default Product