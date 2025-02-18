import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

export const fetchBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBook = async (bookData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios.post(API_URL, bookData, config);
  return response.data;
};
