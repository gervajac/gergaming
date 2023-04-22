import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Cart } from "./pages/Cart";
import { Carrousel } from "./components/Carrousel";
import { DetailPage } from "./pages/DetailPage";
import { SignIn } from "./pages/SignIn";
import { LogIn } from "./pages/LogIn";
import { Provider } from "./components/context/Provider";

function App() {
  return (
    <BrowserRouter>
    <Provider>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Carrousel />
      <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
