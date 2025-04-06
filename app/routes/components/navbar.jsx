import { Link } from "@remix-run/react";
import styles from "../../styles/navbar.css";

// Imports the styles from the style sheet
export const links = () => [{ rel: "stylesheet", href: styles }];



export default function Navbar({ isHomepage }) {
  return (
    <nav>
      <ul className="nav-list">
        // If isHomepage is true, then it will hide this first link
        <li className={`nav-link-wrapper ${isHomepage ? "hide" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li><Link to="/inventory"className="nav-link">Inventory</Link></li>
        <li><Link to="/shopping-list"className="nav-link">Shopping List</Link></li>
      </ul>
    </nav>
  );
  
}
