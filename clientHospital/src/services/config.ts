import axios from 'axios';

const http = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: true
});

http.interceptors.request.use(request => {
  if (request.headers)
    request.headers["Authorization"] = `Bearer ${localStorage.getItem("access-token")}`;

  return request;
});

http.interceptors.response.use(response => {
  return response;
  },
  async (error) => {
    
    // Pass all non 401s back to the caller.
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    try {
      const response = await http.get('/users/auth/refresh');
      const access_token = response.data.access_token;
      
      localStorage.setItem("access-token", access_token);
      error.hasRefreshedToken = true;
      
      return Promise.reject(error);

    } catch (error) {
      const tokenError = new Error("Cannot refresh token");
      return Promise.reject(tokenError);
    }
      

  }
);

export default http;
