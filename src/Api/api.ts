import axios from "axios";
import { IUser } from "../db/models/UserModel";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
const server = `${process.env.REACT_APP_SERVER}/api/`;
const api = {
  loadCollectors: () => axios.get(`${server}collectors/`),
  loadWada: (office_id: String) => axios.get(`${server}wards/`, {params: {office_id: office_id}}),
  loadMarga: (office_id: String) => axios.get(`${server}margas/`, {params: {office_id: office_id}}),
  loadBasti: (office_id: String) => axios.get(`${server}bastis/`, {params: {office_id: office_id}}),
  login: (auth: IUser) => axios.post(`${server}login/`, { data: auth }),
  
  postHousehold: (data: any) => axios.post(`${server}post-household/`, { data }),
};

export default api;
