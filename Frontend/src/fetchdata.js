import axios from 'axios';
export const API = 'http://3.87.165.124:88/api/rgb-color';
export const fetchData = () => {
  const url = `${API}/?limit=32768`;
  return axios.get(url);
};

fetchData();
