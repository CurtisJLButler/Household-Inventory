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
  };

  return (
    <div>
      <header>
        {/* <img
          src={logo}
          alt="Vue logo"
          className="logo"
          width="125"
          height="125"
        /> */}
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
          </tbody>
        </table>
      </main>
    </div>
  );
}
