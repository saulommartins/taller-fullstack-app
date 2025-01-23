import React, { useState, useEffect } from "react";
import { fetchItems, createItem, deleteItem } from "./utils/api";
import ItemList from "./components/ItemList";

const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const data = await fetchItems();
    setItems(data);
  };

  const handleAddItem = async () => {
    try {
      const newItem = await createItem({ name, description });
      setItems([...items, newItem]);
      setName("");
      setDescription("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Item Manager</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ItemList items={items} onDelete={handleDeleteItem} />
    </div>
  );
};

export default App;

