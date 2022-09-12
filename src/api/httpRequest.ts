import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getHotelsData = () =>
  axios.get(`${BASE_URL}/hotels`).then((response) => response.data);
