import { NavLink } from "react-router-dom";
import "../App.css"; 

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header-fixed p-0">
      <div className="container-fluid px-4">

        {/* Logo bên trái */}
        <NavLink className="navbar-brand" to="/">
          <img
            src="/src/image/Logo1.png"
            alt="Logo"
            className="logo-img"
          />
        </NavLink>


        {/* Các mục menu */}
        <div className="collapse navbar-collapse justify-content-start " id="navbarNav" style={{ marginLeft: "60px" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Login bên phải */}
        <div className="d-flex gap-3" style={{ marginRight: "20px" }}>
          <div className="btn btn-outline-primary button-custom" to="/login">
            Login
          </div>
          <div className="btn btn-primary button-custom" to="/login" style={{ backgroundColor: "#1C61AD" }}>
            Sign up
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Header;
