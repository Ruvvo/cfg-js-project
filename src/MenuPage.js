import React from "react";
import lasagne from "./lasagne.jpg";
import italiancake from "./italiancake.png";
import tiramasu from "./tiramasu.jpg";
import foodmenu from "./foodmenu.png";

export default function Menu() {
  return (
    <div className="App">
      <div id="header">
        <h1>Buon Viaggio 🍝 Italian Restaurant</h1>
        <h5 id="tagline"> – Your Tastebuds on a Journey – </h5>
      </div>
      <div>
        <h1 className="menuPage">Our Menu</h1>
        <p className="Pmenu">Curious? Here are our most popular menu items.</p>
        <div className="row">
          <div className="column">
            <img
              src={italiancake}
              alt="italian cake"
              width="300"
              height="300"
            ></img>
            <button className="price">£20</button>
          </div>
          <div className="column">
            <img
              src={foodmenu}
              alt="starter meal"
              width="300"
              height="300"
            ></img>
            <button className="price">£22</button>
          </div>
          <div className="column">
            <img src={lasagne} alt="lasagne " width="300" height="300"></img>
            <button className="price">£10</button>
          </div>
          <div className="column">
            <img src={tiramasu} alt="tirasmu" width="300" height="300"></img>
            <button className="price">£30</button>
          </div>
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
