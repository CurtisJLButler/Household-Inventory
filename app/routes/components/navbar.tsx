import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/listtoget">List to get</Link>
    </nav>
  );
}
