import "./App.css";
import logo from './Assets/logo.png';
// import Writing from './Assets/Writing.png'

function App() {
  return (
    <div>
      <nav className="Navbar">
        <div className="heading">
          {/* <h1>SwiftShare</h1> */}
          <img className="logo-img" alt="logo-img" src={logo} />
        </div>
        <div>
        {/* <img className="Writing" alt="Writing-img" src={Writing} /> */}
          <button>Login</button>
          <button>Sign_up</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
