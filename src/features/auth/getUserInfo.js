import axios from 'axios';

export const getUser = async () => {
  try {
    const response = await axios.get('/api/user');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }