import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route
      path="/home"
      element={
      <Home/>} 
      />
      <Route
        path="/welcome"
        element={<Welcome/>}
      />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
