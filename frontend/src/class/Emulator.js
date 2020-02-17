import axios from 'axios';
import config from '../config';

export default class Emulator {
  static emulators () {
    return axios.get(`${config.backend.route}/emulators`)
      .then((response) => {
        return response.data;
      });
  }
}