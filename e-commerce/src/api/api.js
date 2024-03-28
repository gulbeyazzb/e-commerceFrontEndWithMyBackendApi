import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: token
      ? {
          authorization: token,
        }
      : {},
  });
};
export let API;

export const renewAPI = (token) => {
  token && localStorage.setItem("token", token);

  API = axiosWithAuth();
};

renewAPI(localStorage.getItem("token"));

// const baseURL = "http://localhost:8888/";
// const headers = new Headers();

// let username = "y@gmail.com";
// let password = "423154";
