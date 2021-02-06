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
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

export default getProduct;
