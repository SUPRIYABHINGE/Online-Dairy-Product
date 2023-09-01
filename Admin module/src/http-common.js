import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8087/FarmersMarketplace/',
  headers: {
    'Content-Type': 'application/json',
  },
});
