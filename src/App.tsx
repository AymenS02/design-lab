import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PageTransition from "./components/PageTransition";

import Navigation from "./pages/Navigation";
import Cart from "./pages/Cart";
import SquaresInCircles from "./pages/SquaresInCircles";
import Buttons from "./pages/Buttons";
import FAQ from "./pages/FAQ";
import SmoothScroll from "./components/SmoothScroll";
import Sandbox from "./pages/Sandbox";
import YachtHero from "./pages/YachtHero";



function App() {
  return (
    <BrowserRouter>

      <SmoothScroll />
      
      <PageTransition>
      <div className="relative min-h-screen overflow-hidden">

        {/* Math Grid Background */}
        <div
          className="
            fixed
            inset-0
            -z-10
            bg-grid
          "
        />
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

            <Route
              path="/buttons"
              element={<Buttons />}
            />

            <Route
              path="/faq"
              element={<FAQ />}
            />

            <Route
              path="/sandbox"
              element={<Sandbox />}
            />

            <Route
              path="/yachthero"
              element={<YachtHero />}
            />

          </Routes>
      </div>

      </PageTransition>

    </BrowserRouter>
  );
}

export default App;