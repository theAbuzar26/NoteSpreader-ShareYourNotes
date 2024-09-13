import axios from "axios";
const LocalBASE_URL = "http://localhost:8000/api/";
const BASE_URL = "https://notespreader.onrender.com";
export const pf = "https://notespreader.onrender.com/images";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
