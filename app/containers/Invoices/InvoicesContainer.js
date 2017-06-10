import React, { Component } from 'react'
import { Invoices } from 'components'
import { getInvoices } from 'helpers/api'

class InvoicesContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      invoices: {},
      activeInvoice: ''
    }
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getInvoices()
      .then(data => {
        console.log(data.results)
        this.setState({
          isLoading: false,
          invoices: data.results
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          isError: true
        })
        throw new Error(error)
      })
  }
  render() {
    return <Invoices {...this.state} />
  }
}

export default InvoicesContainer
