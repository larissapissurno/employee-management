/* eslint-disable */

import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('user-token');

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

api.interceptors.response.use(
  (response) => response,
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
