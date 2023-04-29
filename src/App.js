import React from "react";
import "./App.css";
import platter from "./platter.png";
import pizzaplate from "./pizzaplate.png";

function App() {
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
        <button title="Our Menu" className="button1">
          Our Menu
        </button>
      </div>
      <div className="split left">
        <div className="centered">
          <img src={pizzaplate} width="200" height="200"></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <h3>Our meeting times</h3>
          <p>Monday-Friday: 5pm - 11pm Closed Sundays</p>
        </div>
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

export default App;
