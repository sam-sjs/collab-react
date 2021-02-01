import axios from 'axios'
import {config} from './constants'

const api = {
  getProjects() {
    return axios.get(`${config.url.API_URL}/flights`);
  },

  postNewUser(params) {
    return axios.post(`${config.url.API_URL}/users/create`, params);
  },

  patchUpdateUser(params) {
    return axios.patch(`${config.url.API_URL}/users/update`, params);
  },

  postUserRequest(params) {
    return axios.post(`${config.url.API_URL}/user`, params);
  }
};

export default api
