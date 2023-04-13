import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
      path="/home"
      element={<Home/>} 
      />
      <Route
        path="/welcome"
        element={<Welcome/>}
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
