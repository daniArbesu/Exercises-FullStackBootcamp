import axios from 'axios';

export const apiHeaders = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json',
};

export const API_ROVER = axios.create({
  headers: apiHeaders,
  baseURL: import.meta.env.VITE_APP_NASA_API_ROVER_URL,
  timeout: 6000,
});
