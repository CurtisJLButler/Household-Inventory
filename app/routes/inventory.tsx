<<<<<<< HEAD
import { useState } from "react";
// import logo from "~/assets/logo.svg";
import styles from "../styles/inventory.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Inventory() {
  const [listItems] = useState([
    { id: 1, name: "Item 1", count: 5 },
    { id: 2, name: "Item 2", count: 3 },
    { id: 3, name: "Item 3", count: 8 },
    { id: 4, name: "Item 4", count: 2 },
    { id: 5, name: "Item 5", count: 10 },
  ]);

  const handleHaveNoneClick = (item) => {
    alert(`You have no ${item.name} left.`);
  };

  const handleAddToListClick = (item) => {
    alert(`Added ${item.name} to list.`);
=======
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
>>>>>>> c2955ab666c37bafce8f74c236a3ad492012906e
  };

  return (
    <div>
      <header>
<<<<<<< HEAD
        {/* <img
          src={logo}
          alt="Vue logo"
          className="logo"
          width="125"
          height="125"
        /> */}
=======
>>>>>>> c2955ab666c37bafce8f74c236a3ad492012906e
        <div className="wrapper">
          <h1>Welcome to the Inventory App!</h1>
        </div>
      </header>
<<<<<<< HEAD

=======
>>>>>>> c2955ab666c37bafce8f74c236a3ad492012906e
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
<<<<<<< HEAD
            {listItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <div className="button-container">
                    <button
                      className="list"
                      onClick={() => handleAddToListClick(item)}
                    >
                      Add to list
                    </button>
                    <button
                      className="none"
                      onClick={() => handleHaveNoneClick(item)}
                    >
                      Have none
                    </button>
                  </div>
                </td>
              </tr>
            ))}
=======
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
>>>>>>> c2955ab666c37bafce8f74c236a3ad492012906e
          </tbody>
        </table>
      </main>
    </div>
  );
}
