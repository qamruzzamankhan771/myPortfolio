import "../css/NavBar.css";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="My Logo" />
      </div>
      <ul className="navbar-list">
        <li>
          <a href="#">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-cogs"></i> Service
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-briefcase"></i> My Work
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-file-alt"></i> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
