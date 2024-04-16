import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Men/" element={<Men />} />
      <Route path="/Women/" element={<Women />} />
    </Routes>
  )
}

export default Pages