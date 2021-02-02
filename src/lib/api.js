import axios from 'axios'
import {config} from './constants'

const token = localStorage.getItem('jwtToken');
axios.defaults.headers.common['Authorization'] = token

const api = {
  getProjects() {
    return axios.get(`${config.url.API_URL}/flights`);
  },

  postNewUser(params) {
    return axios.post(`${config.url.API_URL}/users/create`, params);
  },

  patchUpdateUser(params) {
    return axios.patch(`${config.url.API_URL}/user/update`, params);
  },

  getUser() {
    return axios.get(`${config.url.API_URL}/user`);
  },

  deleteUser(params) {
    return axios.post(`${config.url.API_URL}/user/delete`, params);
  },

  postLogin(params) {
    return axios.post(`${config.url.API_URL}/login`, params);
  }
};

export default api
