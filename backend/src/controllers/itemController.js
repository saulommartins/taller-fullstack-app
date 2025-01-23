const { addItem, getAllItems, removeItem } = require("../models/itemModel");

// GET /api/items
const getItems = (req, res) => {
  try {
    const items = getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" });
  }
};

// POST /api/items
const createItem = (req, res) => {
  const { name, description } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Name is required and must be a string." });
  }

  try {
    const newItem = addItem(name, description || "");
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create item" });
  }
};

// DELETE /api/items/:id
const deleteItem = (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const success = removeItem(id);
    if (!success) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item" });
  }
};

module.exports = { getItems, createItem, deleteItem };

