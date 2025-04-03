// app/routes/inventory.jsx
import { useLoaderData } from "@remix-run/react";

import styles from "../styles/inventory.css";
import {get} from "./components/scripts"

export const links = () => [{ rel: "stylesheet", href: styles }];

export const loader = async () => {
  return await get();
};

export default function Inventory() {
  const items = useLoaderData();

  const handleHaveNoneClick = (item) => {
    alert(`You have no ${item.item} left.`);
  };

  const handleAddToListClick = (item) => {
    alert(`Added ${item.item} to list.`);
  };

  return (
    <div>
      <header>
        <div className="wrapper">
          <h1>Welcome to the Inventory App!</h1>
        </div>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length ? (
              items.map((item) => (
                <tr key={item._id}>
                  <td>{item.item}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <div className="button-container">
                      <button className="list" onClick={() => handleAddToListClick(item)}>
                        Add to list
                      </button>
                      <button className="none" onClick={() => handleHaveNoneClick(item)}>
                        Have none
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No items found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}
