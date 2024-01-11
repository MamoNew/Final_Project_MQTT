import axios from "axios"; 

const myAxios = new axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export default myAxios;