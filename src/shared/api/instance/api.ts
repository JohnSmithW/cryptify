// shared/api/instance/api.ts
import axios from 'axios';

export const coingeckoInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  timeout: 10000,
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': import.meta.env.COINGECKO_API_KEY,
  },
});
