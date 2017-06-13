import React, { Component } from 'react'
import { Invoices } from 'components'
import { getInvoices } from 'helpers/api'
import { formatPrice, findRevenue, findApproved, findReceived,
findOldest, findNewest, findTopVendor, findLowestVendor  } from 'helpers/utils'

class InvoicesContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      invoices: [],
      active: '',
      stats: {
        revenue: 0
      }
    }
  }
  componentDidMount() {
    this.makeRequest()
    if (this.props.params.id) {
      this.setState({ active: this.props.params.id })
    }
    this.updateStats()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id) {
      this.setState({ active: nextProps.params.id })
    } else {
      this.setState({ active: '' })
    }
  }
  updateStats() {
    const { invoices } = this.state
    const vendorsByCount = invoices.reduce((obj, el) => {
      obj[el.vendor] = (obj[el.vendor] || 0) + 1
      return obj
    }, {})
    console.log(vendorsByCount)
    const topVendor = findTopVendor(vendorsByCount)
    const lowestVendor = findLowestVendor(vendorsByCount)
    // const invoicesByDate = [...invoices].sort((a,b) => Date.parse(a.invoice_date) > Date.parse(b.invoice_date))
    this.setState({
      stats: {
        count: invoices.length,
        revenue: findRevenue(invoices),
        approved: findApproved(invoices),
        received: findReceived(invoices),
        topVendor: findTopVendor(vendorsByCount),
        lowestVendor: findLowestVendor(vendorsByCount),
        // worstVendor: {
        //   count: worstVendor[0],
        //   name: worstVendor[1]
        // }
        // oldest: findOldest(invoicesByDate),
        // newest: findNewest(invoicesByDate)
      }
    })
  }
  makeRequest() {
    getInvoices()
      .then(data => {
        this.setState({
          isLoading: false,
          invoices: data.results
        }, () => this.updateStats())
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
