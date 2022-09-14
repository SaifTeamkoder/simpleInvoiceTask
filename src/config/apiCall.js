import api from './api';

const login = data => api.post(`/token`, data);
const getUserProfile = data =>
  api.get(`/membership-service/1.2.0/users/me`, data);
const fetchInvoice = data =>
  api.get(
    `/invoice-service/1.0.0/invoices?pageNum=1&pageSize=10&dateType=INVOICE_DATE&sortBy=CREATED_DATE&ordering=ASCENDING`,
    data,
  );
const createInvoice = data => api.post(`/invoice-service/2.0.0/invoices`, data);

export default {
  login,
  getUserProfile,
  fetchInvoice,
  createInvoice,
};
