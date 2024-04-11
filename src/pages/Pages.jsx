 import Home from "./Home";
 import Men from "./Men";
 import Women from "./Women";
 import Product from './Product';
 import Favorite from "./Favorite";
 import Basket from "./Basket"
 import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Men/" element={<Men />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="/Favorite/" element={<Favorite />} />
      <Route path="/Basket" element={<Basket />} />
    </Routes>
  )
}

export default Pages