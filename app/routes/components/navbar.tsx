import { Link } from "@remix-run/react";
import styles from "../../styles/navbar.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/test" className="nav-link">Test</Link></li>
          <li><Link to="/inventory" className="nav-link">Inventory</Link></li>
          <li><Link to="/listtoget" className="nav-link">List to get</Link></li>
        </ul>
      </div>
      
    </nav>
  );
}
