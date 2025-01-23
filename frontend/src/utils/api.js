import axios from "axios";

const API_URL = "http://localhost:5001/api/items";

export const fetchItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

