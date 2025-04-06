import { Link } from "@remix-run/react";
import styles from "../styles/homepage.css";
import Nav from "../routes/components/navbar";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Household Inventory!</h1>
        <p>Select an option to get started:</p>
      </header>

      <main className="home-main">
        <Nav isHomepage={true}/>
      </main>
    </div>
  );
}
