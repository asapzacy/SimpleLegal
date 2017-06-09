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
      })
  }
  sortBy(category) {
    console.log(category)
    const copy = this.state.invoices
    console.log(copy)
  }
  render() {
    return <Invoices {...this.state} sortBy={this.sortBy} />
  }
}

export default InvoicesContainer
