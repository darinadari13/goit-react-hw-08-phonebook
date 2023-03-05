import axios from "axios";

const BASE_URL = 'https://connections-api.herokuapp.com';

const $publicHost = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};


$privateHost.interceptors.request.use(authInterceptor);

export const UserAPI = {
  async register(formData) {
    const { data } = await $publicHost.post(`users/signup`, formData);
    return data;
  },
  async login(formData) {
    const { data } = await $publicHost.post(`users/login`, formData);
    return data;
  },
  async getUserDetails() {
    const { data } = await $privateHost.get(`/users/current`);
    return data;
  },
  async logOut() {
    const { data } = await $privateHost.post(`/users/logout`);
    return data;
  },
};

export const ContactsAPI = {
  async getContacts() {
    const { data } = await $privateHost.get(`/contacts`);
    return data;
  },
  async addContact(contactData) {
    const { data } = await $privateHost.post(`/contacts`, contactData);
    return data;
  },
  async deleteContact(contactId) {
    const { data } = await $privateHost.delete(`/contacts/${contactId}`);
    return data;
  },
};
