import axios from 'axios';

export const getHeroSubHeading= async () => {
  const response = await axios.get('http://localhost:1337/api/hero-sub-heading');
  return response?.data;
};