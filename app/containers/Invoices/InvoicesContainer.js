import React, { Component } from 'react'
import { Invoices } from 'components'
import { getInvoices, getDetails } from 'helpers/api'

class InvoicesContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      invoices: [],
      activeInvoice: '',
      details: {}

    }
  }
  componentDidMount() {
    this.makeRequest()
    if (this.props.params.id) {
      this.setState({ activeInvoice: this.props.params.id })
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      activeInvoice: nextProps.params.id
    }, () => this.makeRequest2(this.state.activeInvoice))
  }
  makeRequest2(id) {
    getDetails(id)
      .then(details => {
        this.setState({
          details
        })
      })
      .catch(error => {
        this.setState({
          isError: true
        })
        throw new Error(error)
      })
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
        throw new Error(error)
      })
  }
  render() {
    return <Invoices {...this.state} />
  }
}

export default InvoicesContainer
