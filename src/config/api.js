import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

const api = Axios.create({ baseURL: 'https://api.drywallsurgeon.com/api' });
export const setAuthHeader = async (userToken = false) => {
  const token = userToken || (await AsyncStorage.getItem('userToken'));
  api.defaults.headers = { Authorization: 'Bearer ' + token };
};
api.interceptors.response.use(
  async (response) => {
    //	console.log(`api response`, response);
    if (response.status === 200 && response.data.status == true) {
      //	console.log(`api response true`);
      return response.data;
    } else {
      //	console.log(`api response false`);
      return Promise.reject(response.data);
    }
  },
  async (error) => {
    console.log(`API - error`, { error });
    return Promise.reject(error.data);
  }
);
setAuthHeader();
export default api;
