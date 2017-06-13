import React, { Component } from 'react'
import { Invoices } from 'components'
import { getInvoices } from 'helpers/api'

class InvoicesContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      invoices: [],
      active: ''
    }
  }
  componentDidMount() {
    this.makeRequest()
    if (this.props.params.id) {
      this.setState({ active: this.props.params.id })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id) {
      this.setState({ active: nextProps.params.id })
    } else {
      this.setState({ active: '' })
    }
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
