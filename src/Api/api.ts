import axios from "axios";
import { IUser } from "../db/models/UserModel";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
const server = `${process.env.REACT_APP_SERVER ? process.env.REACT_APP_SERVER : 'https://8844-2400-1a00-b050-148b-90ff-9710-9087-6c43.ngrok.io'}/api/`;
const api = {
  loadCollectors: () => axios.get(`${server}collectors/`),
  loadWada: (office_id: String) => axios.get(`${server}wards/`, {params: {office_id: office_id}}),
  loadMarga: (office_id: String) => axios.get(`${server}margas/`, {params: {office_id: office_id}}),
  loadBasti: (office_id: String) => axios.get(`${server}bastis/`, {params: {office_id: office_id}}),
  login: (auth: IUser) => axios.post(`${server}login/`, { data: auth }),
  
  postHousehold: (data: any) => axios.post(`${server}post-household/`, { data }),
};

export default api;
