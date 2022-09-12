import { axiosInstance } from './axiosInstance/index';

export const getAll = () =>
  axiosInstance.get(`/hotels`).then((response) => response.data);
