import axios from "axios";

const API_URL = "http://localhost:8000/patient/auth";

export const register = (firstname, email, password) => {
  return axios.post(API_URL + "signup", {
    firstname,
    email,
    password,
  });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};




export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken && user.refreshToken ) {
    return (
      { Authorization: 'Bearer ' + user.accessToken };
      { 'x-refresh-token': user.refreshToken };
    )
  } else {
    return {
      console.log('user dont have token');
    };
  }
};