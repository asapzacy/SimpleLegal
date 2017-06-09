import axios from 'axios'

export const getInvoices = () => {
  const api = '/api/invoices'
  return axios.get(api)
    .then(invoices => invoices.data)
    .catch(error => error.status)
}
