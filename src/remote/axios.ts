import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL + "/" + process.env.REACT_APP_API_VERSION;

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config : any) {
    console.log(config)
    return config;
  },
  function (error : any) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response : any) {
    console.log(response);
    return response;
  },
  function (error : any) {
    console.log(error.response);
    return Promise.reject(error);
  },
);

export default instance;

export function setAccessToken(axiosInstance: any, accessToken: string): void {
  axiosInstance.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${accessToken}`;
}
