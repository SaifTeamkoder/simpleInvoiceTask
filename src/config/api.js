import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://sandbox.101digital.io/',
});

export const setAuthHeader = async (accessToken = false) => {
  const token = accessToken || (await AsyncStorage.getItem('accessToken'));
  api.defaults.headers = {Authorization: 'Bearer ' + token};
};

api.interceptors.response.use(
  async response => {
    if (response.status === 200) {
      return response;
    } else {
      return Promise.reject(response);
    }
  },
  async error => {
    return Promise.reject(error);
  },
);

setAuthHeader();

export default api;
