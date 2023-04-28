import logo from './logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="header">
      <h1 id="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Buon Viaggio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Italian Restaurant</h1>
      <img src={logo} id="logo" alt=""/>
      </div>

      <div id="content">
          <h1>Hello world!</h1>
          <li>🍕</li>

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
