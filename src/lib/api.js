import axios from 'axios'
import {config} from './constants'

const token = localStorage.getItem('jwtToken');
axios.defaults.headers.common['Authorization'] = token

const api = {
  getProjects() {
    return axios.get(`${config.url.API_URL}/projects`);
  },

  getProjectById(params) {
    return axios.get(`${config.url.API_URL}/project/${params}`);
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
  },

  postCreateProject(params) {
    return axios.post(`${config.url.API_URL}/projects/create`, params);
  }
};

export default api
