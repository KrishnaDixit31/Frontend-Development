import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// To Get All Data
export const fetchPost = async (PageNumber) => {
  try {
    const res = await api.get(`/posts?_start=${PageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// To Get All Individual Data
export const fetchInvPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// To Delete Individual Data
export const deletePost = async (id) => {
  return api.delete(`/posts/${id}`);
};

// To Update Individual Data
export const updatePost = async (id) => {
  return api.patch(`/posts/${id}`, { title: "I have updated" });
};

// Infinite Data Fetching
export const fetchUsers = async ({ pageParam = 1 }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
