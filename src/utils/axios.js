import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://surittec-api.herokuapp.com/clients',
});
