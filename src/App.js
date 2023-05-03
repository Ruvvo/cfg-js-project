import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { MenuPage } from "./Pages/MenuPage";
import "./App.css";
import platter from "./platter.png";
import pizzaplate from "./pizzaplate.png";
import logo from './logo.png'
import "./button-group.css";
import ButtonGroup from "./ButtonGroup";
// import Navbar from "./Pages/Navbar";

function App() {
  const printButtonLabel = (event) => {
    console.log(event.target.name);}
  return (
    <div className="App">
      <div id="header">
      <h1 id="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Buon Viaggio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Italian Restaurant</h1>
        <img src={logo} id="logo" alt=""/>
      </div>

      <div id="content" className="tagline">
        <h2 className="firstword">
          Your Tastebuds <br></br>on a Journey.
          <img src={platter} width="500" height="500"></img>
        </h2>
        <br></br>
        <button
          as={Link}
          to="./Pages/Menupage"
          title="Our Menu"
          className="button1"
        >
          Our Menu
        </button>

        {/* <div className="split left">
        <div className="centered">
          <img src={pizzaplate} width="200" height="200"></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <h3>Our meeting times</h3>
          <p>Monday-Friday: 5pm - 11pm Closed Sundays</p>
        </div>
      </div> */}
        {/* <div className="main">
          <div className="small">left</div>

          <div className="large">right</div>
        </div>
      </div> */}
        <div className="split left">
          <div className="left1">
            {/* <img src={pizzaplate}></img>
            <h2>Jane Flex</h2>
            <p>Some text.</p> */}
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <h3 id="openingtimes">Our Opening Times:</h3>
            <p className="times">Monday-Friday: 5pm - 11pm <br></br>Closed on Sundays.</p>
          </div>
      </div>
      
        <div id="footer">
          <p id="info">
            <i class="fa fa-phone"></i> 07212121 <br></br>
            <i class="fa fa-shop"></i> 123, Italia Palace, Lala Land<br></br>
            <i class="fa fa-envelope"></i> info@buonviaggio.com <br></br>
          </p>
        </div>
      <div className="ButtonGroup">
        <h3 id="buttonheader">Rate your experience</h3>
        <ButtonGroup
        buttons={["Great", "OK", "Bad"]}
        doSomethingAfterClick={printButtonLabel}
      />
    </div>
      </div>
    </div>
  );
}

export default App;
