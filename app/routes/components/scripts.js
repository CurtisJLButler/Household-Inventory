import axios from "axios";
export const get = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/items");
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