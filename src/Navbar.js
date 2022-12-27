import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li class="nav-padding">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-padding">
          <Link to="/about">About me</Link>
        </li>
        <li class="nav-padding">
          <Link to="/projects">Projects</Link>
        </li>
        <li class="active">
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
}
