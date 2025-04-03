import { useLoaderData } from "@remix-run/react";
import { get } from "./components/scripts";
import styles from "../styles/inventory.css";


export const links = () => [{ rel: "stylesheet", href: styles }];

export const loader = async () => {
    return await get();
  };
  
  export default function Inventory() {
    const items = useLoaderData();
  
    const handleMarkAsBoughtClick = (item) => {
      alert(`${item.item} was bought`);
    };
  
    const handleRemoveClick = (item) => {
      alert(`Remove ${item.item} from list`);
    };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between bg-gray-800 p-4">
        <div className="text-white">
          <h1 className="text-2xl font-bold">Shopping List</h1>
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
                    <button
                      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                      onClick={() => handleMarkAsBoughtClick(item)}
                    >
                      Mark as Bought
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleRemoveClick(item)}
                    >
                      Remove
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