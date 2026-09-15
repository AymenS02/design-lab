import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./pages/Navigation";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;