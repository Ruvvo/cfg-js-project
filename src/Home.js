import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Router,
  useNavigate,
} from "react-router-dom";
import MenuPage from "./MenuPage";
import "./App.css";
import platter from "./platter.png";
import pizzaplate from "./pizzaplate.png";
import logo from "./logo.png";
import ButtonGroup from "./ButtonGroup";
// import Navbar from "./Pages/Navbar";

// const { Link, BrowserRouter } = window.ReactRouterDom;

export default function Home() {
  const printButtonLabel = (event) => {
    console.log(event.target.name);
  };
  return (
    <div className="App">
      <div id="header">
        <h1>Buon Viaggio 🍝 Italian Restaurant</h1>
        <h5 id="tagline"> – Your Tastebuds on a Journey – </h5>
      </div>
      <div id="content" className="tagline">
        <h2 className="firstword">
          Your tastebuds <br></br>on a journey.
          <img src={platter} width="500" height="500"></img>
        </h2>
        <br></br>
        <Link to="/menupage">
          <button className="button1"> Our Menu </button>
        </Link>
      </div>

      <div className="split left">
        <div className="left1"></div>
      </div>

      <div className="split right">
        <div className="centered">
          <h3 id="openingtimes">Our opening times</h3>
          <p className="times">Monday-Friday: 5pm - 11pm Closed Sundays</p>
        </div>
      </div>
      <div className="ButtonGroup">
        <h3 id="buttonheader">Rate your experience</h3>
        <ButtonGroup
          buttons={["Great", "OK", "Bad"]}
          doSomethingAfterClick={printButtonLabel}
        />
      </div>
      <div id="footer">
        <p id="info">
          <i class="fa fa-phone"></i> 07212121 <br></br>
          <i class="fa fa-shop"></i> 123, Italia Palace, Lala Land<br></br>
          <i class="fa fa-envelope"></i> info@buonviaggio.com <br></br>
        </p>
      </div>
    </div>
  );
}
