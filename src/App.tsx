import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./pages/Navigation";
import CartPage from "./pages/CartPage";
import SquaresInCircles from "./pages/SquaresInCircles.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/squaresincircles" element={<SquaresInCircles />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;