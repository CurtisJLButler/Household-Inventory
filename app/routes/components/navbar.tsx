import { Link } from "@remix-run/react";
<<<<<<< HEAD
=======
import styles from "../../styles/navbar.css";

export const links = () => [{ rel: "stylesheet", href: styles }];
>>>>>>> c2955ab666c37bafce8f74c236a3ad492012906e

export default function Navbar() {
  return (
    <nav>
<<<<<<< HEAD
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/listtoget">List to get</Link>
=======
      <div className="navbar-container">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/test" className="nav-link">Test</Link></li>
          <li><Link to="/inventory" className="nav-link">Inventory</Link></li>
          <li><Link to="/listtoget" className="nav-link">List to get</Link></li>
        </ul>
      </div>
      
>>>>>>> c2955ab666c37bafce8f74c236a3ad492012906e
    </nav>
  );
}
