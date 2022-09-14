import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

const api = Axios.create({baseURL: 'https://sandbox.101digital.io/'});

export const setAuthHeader = async (userToken = false) => {
  const token = userToken || (await AsyncStorage.getItem('userToken'));
  api.defaults.headers = {Authorization: 'Bearer ' + token};
};

api.interceptors.response.use(
  async response => {
    if (response.status === 200 && response.data.status == true) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  async error => {
    return Promise.reject(error.data);
  },
);

setAuthHeader();

export default api;
