import React, { Component } from 'react'
import { Invoices } from 'components'
import { getInvoices } from 'helpers/api'
import { formatPrice, findRevenue, findApproved, findReceived,
findDates, findTopVendor, findLowestVendor  } from 'helpers/utils'

class InvoicesContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      invoices: [],
      active: '',
      stats: {},
      sortedBy: '',
      sortOrder: true
    }
    this.sortTable = this.sortTable.bind(this)
  }
  componentDidMount() {
    if (this.props.params.id) {
      this.setState({
        active: this.props.params.id
      })
    }
    this.makeRequest()
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
    this.setState({
      stats: {
        revenue: findRevenue(invoices),
        dates: findDates(invoices),
        count: invoices.length,
        approved: findApproved(invoices),
        received: findReceived(invoices),
        topVendor: findTopVendor(vendorsByCount),
        lowestVendor: findLowestVendor(vendorsByCount)
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
  sortTable(term) {
    const copy = [...this.state.invoices]
    if (term === 'vendor') {
      if (this.state.sortOrder) {
        copy.sort((a,b) => a.vendor.localeCompare(b.vendor))
      } else {
        copy.sort((a,b) => b.vendor.localeCompare(a.vendor))
      }
    } else if (term === 'price') {
      if (this.state.sortOrder) {
        copy.sort((a,b) => b.total - a.total)
      } else {
        copy.sort((a,b) => a.total - b.total)
      }
    }
    const newSortOrder = this.state.sortedBy && this.state.sortedBy !== term ? true : !this.state.sortOrder
    this.setState({
      invoices: copy,
      sortedBy: term,
      sortOrder: newSortOrder
    })
  }
  render() {
    return <Invoices {...this.state} sortTable={this.sortTable} />
  }
}

export default InvoicesContainer
