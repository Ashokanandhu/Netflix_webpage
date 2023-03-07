import axios from "axios";
import { baseUrl } from './Constants/constants';

// Create an instance of axios from npm
const instance = axios.create({
  baseURL: baseUrl, // <- change "baseUrl" to "baseURL"
});

export default instance;
