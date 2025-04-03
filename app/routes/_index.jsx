import { Link } from "@remix-run/react";
import styles from "../styles/homepage.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Your Household App!</h1>
        <p>Select an option to get started:</p>
      </header>

      <main className="home-main">
        <div className="button-container">
          <Link to="/test" className="home-button">
            Test
          </Link>
          <Link to="/inventory" className="home-button">
            Inventory
          </Link>
          <Link to="/listtoget" className="home-button">
            List to get
          </Link>
        </div>
      </main>
    </div>
  );
}
