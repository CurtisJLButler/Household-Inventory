import { useLoaderData, Form, redirect } from "@remix-run/react";
import styles from "../styles/inventory.css";
import { get, post, del } from "./components/scripts";

// Imports the styles from the style sheet
export const links = () => [{ rel: "stylesheet", href: styles }];

// Loads server data, in this case it's getting the items from the server
export const loader = async () => {
  const response = await get();
  const data = await response.json();
  return { items: data };
};

// Remix action function to handle the existing items form, the delete items form, and the new item form
export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("id");
  const actionType = formData.get("actionType");


  /*
  allows a form action type of delete because
  the only way that remix can process java script
  in the client is by form submition 
  I'm pretty sure at least
  */
  if (actionType === "delete") {
    await del(id);
    return redirect("/inventory");
  }


  // Getting the fields from the form
  const item = formData.get("item");
  const quantity = formData.get("quantity");
  const isRunningLow = formData.get("isRunningLow");
  const notes = formData.get("notes");


  // Makes an object with the data from above
  const updatedFields = {
    ...(id),
    item: item?.toString(),
    quantity: quantity?.toString() || "",
    isRunningLow: isRunningLow === "true",
    notes: notes?.toString(),
  };

  /* I post the data and don't patch it because I have functionality 
  in the server to handle if there is an item with the same name */
  await post(updatedFields);

  // Redirects back to the inventory page
  return redirect("/inventory");
}

export default function Inventory() {
  // Sets the object "items" to the data it gets from the get request in scripts
  const { items } = useLoaderData();

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
              <th>Need to Buy More</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* Tells the user that there are no items in the database */}
            {items.length === 0 ? (
              <tr>
                <td colSpan={4}><em>No items available.</em></td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item._id}>

                  {/*Existing item/update item form*/}
                  <Form method="post" style={{ display: "contents" }}>
                    <input type="hidden" name="id" value={item._id} />
                    <input type="hidden" name="actionType" value="save" />
                    <td>
                      <input type="text" name="item" defaultValue={item.item} />
                    </td>
                    <td>
                      <input type="text" name="quantity" defaultValue={item.quantity} />
                    </td>
                    <td>
                      <input type="checkbox" name="isRunningLow" value="true" defaultChecked={item.isRunningLow} />
                    </td>
                    <td>
                      <input type="text" name="notes" defaultValue={item.notes} />
                    </td>
                    <td style={{ border: "none"  }}>
                      <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white"}}>Save</button>
                    </td>
                  </Form>
                  <Form method="post" style={{ display: "contents" }}>
                    <input type="hidden" name="id" value={item._id} />
                    <input type="hidden" name="actionType" value="delete" />
                    <td style={{ border: "none" }}>
                      <button type="submit" style={{ backgroundColor: "red", color: "white" }}>
                        Delete
                      </button>
<<<<<<< Updated upstream:app/routes/inventory.tsx
                      <button className="none" onClick={() => handleHaveNoneClick(item)}>
                        Have none
                      </button>
                    </div>
                  </td>
=======
                    </td>
                  </Form>
>>>>>>> Stashed changes:app/routes/inventory.jsx
                </tr>
              ))
            )}

            {/* New item form*/}
            <Form method="post" style={{ display: "contents" }}>
              <tr>
                <input type="hidden" name="actionType" value="save" />
                <td>
                  <input type="text" name="item" placeholder="New item name" />
                </td>
                <td>
                  <input type="text" name="quantity" placeholder="e.g. 2 boxes" />
                </td>
                <td>
                  <input type="checkbox" name="isRunningLow" value="true" />
                </td>
                <td>
                  <input type="text" name="notes" placeholder="Optional notes" />
                </td>
                <td style={{ border: "none" }}>
                  <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white"}}>Add Item</button>
                </td>
              </tr>
            </Form>
          </tbody>
        </table>
      </main>
    </div>
  );
}
