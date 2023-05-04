import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Router,
  useNavigate,
} from "react-router-dom";
import Home from "./Home.js";
import MenuPage from "./MenuPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/menupage" element={<MenuPage />} />
    </Routes>
  );
}

export default App;
