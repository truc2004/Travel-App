import { useState } from "react";  
import { NavLink } from "react-router-dom";
import "../App.css"; 
import Login from "../pages/Login"; 
import SignIn from "../pages/SignUp"; 

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light header-fixed p-0 bg-white" style={{height: 70}}>
        <div className="container-fluid px-4">
          {/* Logo bên trái */}
          <NavLink className="navbar-brand" to="/">
            <img src="/src/image/Logo1.png" alt="Logo" className="logo-img" />
          </NavLink>

          {/* Các mục menu */}
          <div className="collapse navbar-collapse justify-content-start" id="navbarNav" style={{ marginLeft: "60px" }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Login & Sign up */}
          <div className="d-flex gap-2" style={{ marginRight: "20px" }}>
            <button className="btn btn-outline-primary button-custom" onClick={() => setShowLogin(true)}>
              Đăng nhập
            </button>
            <button className="btn btn-primary button-custom" style={{ backgroundColor: "#1C61AD" }} onClick={() => setShowSignIn(true)}>
              Đăng ký
            </button>
          </div>
        </div>
      </nav>

      {/* Gọi Modal */}
      <Login show={showLogin} handleClose={() => setShowLogin(false)} />
      <SignIn show={showSignIn} handleClose={() => setShowSignIn(false)} />
    </>
  );
}

export default Header;
