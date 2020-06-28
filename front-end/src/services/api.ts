import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  (response) => {
    const token = localStorage.getItem('user-token');

    if (token) {
      response.headers.Authorization = `Bearer ${token}`;
    }

    return response;
  },
  (error) => {
    if (error.response.data.message) {
      Swal.fire({
        text: error.response.data.message,
        icon: 'error',
      });
    }

    return Promise.reject(error.response);
  },
);

export default api;
