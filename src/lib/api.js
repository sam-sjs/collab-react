import axios from 'axios'
import {config} from './constants'

const api = {
  getProjects() {
    return axios.get(`${config.url.API_URL}/flights`);
  }
};

export default api
