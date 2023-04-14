import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Cart } from "./pages/Cart";
import { Carrousel } from "./components/Carrousel";
import { DetailPage } from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      <Carrousel />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
