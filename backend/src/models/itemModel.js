let items = [];
let idCounter = 1;

// Retrieve all items
const getAllItems = () => items;

// Add a new item
const addItem = (name, description) => {
  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  return newItem;
};

// Remove an item by ID
const removeItem = (id) => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  }
  items.splice(index, 1);
  return true;
};

module.exports = { getAllItems, addItem, removeItem };

