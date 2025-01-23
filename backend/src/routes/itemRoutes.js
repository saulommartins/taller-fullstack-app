const express = require("express");
const { getItems, createItem, deleteItem } = require("../controllers/itemController");

const router = express.Router();

// GET /api/items - Retrieve all items
router.get("/", getItems);

// POST /api/items - Add a new item
router.post("/", createItem);

// DELETE /api/items/:id - Delete an item by ID
router.delete("/:id", deleteItem);

module.exports = router;

