import { get } from './base';
import { apiUrl } from './base/axios';

export default {
  getRandomDogImg: () => get(`${apiUrl}/image/random`),
};
