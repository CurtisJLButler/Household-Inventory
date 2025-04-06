import axios from "axios";
export const get = async (isLow) => {
  try {
    var response
    // If isLow is not true, this means we want to return all items
    if (!isLow){
      response = await axios.get("http://localhost:3000/api/items/");
    } else {
      //But when isLow is true, we set a parameter called lowOn to true
      // This tells the server to only return items we are low on
      response = await axios.get("http://localhost:3000/api/items/", {
        params: { lowOn: true}
      });
    }
    return new Response(JSON.stringify(response.data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

// This is used to send an item regardless of it's a duplicate
// The server handles duplicate items rather then doing a patch
export const post = async (newItem) => {
    try {
      const response = await axios.post("http://localhost:3000/api/items", newItem);
      return new Response(JSON.stringify(response.data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error posting new item:", error);
      return new Response(
        JSON.stringify({ error: "Error posting new item" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
    }
  };
  
  // Deletes an item from the database
  export const del = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/items/${id}`);
      return new Response(JSON.stringify(response.data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error deleting item:", error);
      return new Response(
        JSON.stringify({ error: "Error deleting item" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  };