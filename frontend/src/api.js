import axios from 'axios';
import { apiUrl } from './config';

const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/product/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.statusText !== 'OK') {
      throw new Error(response.data.method);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
