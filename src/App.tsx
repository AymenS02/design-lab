import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PageTransition from "./components/PageTransition";

import Navigation from "./pages/Navigation";
import Cart from "./pages/Cart";
import SquaresInCircles from "./pages/SquaresInCircles";


function App() {
  return (
    <BrowserRouter>

      <PageTransition>

        <Routes>

          <Route
            path="/"
            element={<Navigation />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/squaresincircles"
            element={<SquaresInCircles />}
          />

        </Routes>

      </PageTransition>

    </BrowserRouter>
  );
}

export default App;