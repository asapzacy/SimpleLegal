import axios from 'axios'

export const getInvoices = () => {
  const api = '/api/invoices'
  return axios.get(api)
    .then(invoices => invoices.data)
    .catch(error => error.status)
}

export const getDetails = (id) => {
  const api = `/api/invoices/${id}/`
  return axios.get(api)
    .then(details => { console.log(details);return details.data })
    .catch(error => error.status)
}
