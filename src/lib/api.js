import axios from 'axios'
import {config} from './constants'

const api = {
  getProjects() {
    return axios.get(`${config.url.API_URL}/flights`);
  },

  postNewUser(params) {
    return axios.post(`${config.url.API_URL}/users/create`, params);
  }
};

export default api
