import React, { Component } from 'react'
import { Invoices } from 'components'
import { getInvoices } from 'helpers/api'
import { formatPrice } from 'helpers/utils'
import { findRevenue, findApproved, findReceived, findDates,
  findTopVendor, findLowestVendor } from 'helpers/stats'

class InvoicesContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      invoices: [],
      cache: [],
      activePage: '',
      stats: {},
      sortedBy: '',
      sortOrder: true
    }
    this.sortTable = this.sortTable.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.filterTable = this.filterTable.bind(this)
  }
  componentDidMount() {
    this.init(this.props.params.id)
    this.makeRequest()
    this.updateStats()
  }
  componentWillReceiveProps(nextProps) {
    this.init(nextProps.params.id)
  }
  init(id) {
    this.setState({
      activePage: id || ''
    })
  }
  makeRequest() {
    getInvoices()
      .then(data => {
        this.setState({
          isLoading: false,
          invoices: data.results,
          cache: data.results
        }, () => this.sortTable())
      })
      .then(() => this.updateStats())
      .catch(error => {
        this.setState({
          isLoading: false,
          isError: true
        })
        throw new Error(error)
      })
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
  sortTable(term = 'date') {
    const copy = [...this.state.invoices]
    const newSortOrder = this.state.sortedBy !== term ? true : !this.state.sortOrder
    if (term === 'vendor') {
      if (newSortOrder) {
        copy.sort((a,b) => a.vendor.localeCompare(b.vendor))
      } else {
        copy.sort((a,b) => b.vendor.localeCompare(a.vendor))
      }
    } else if (term === 'status') {
      if (newSortOrder) {
        copy.sort((a,b) => a.status.localeCompare(b.status))
      } else {
        copy.sort((a,b) => b.status.localeCompare(a.status))
      }
    } else if (term === 'price') {
      if (newSortOrder) {
        copy.sort((a,b) => b.total - a.total)
      } else {
        copy.sort((a,b) => a.total - b.total)
      }
    } else if (term === 'id') {
      if (newSortOrder) {
        copy.sort((a,b) => parseInt(a.invoice_number) - parseInt(b.invoice_number))
      } else {
        copy.sort((a,b) => parseInt(b.invoice_number) - parseInt(a.invoice_number))
      }
    } else if (term === 'date') {
      if (newSortOrder) {
        copy.sort((a,b) => new Date(b.invoice_date) - new Date(a.invoice_date))
      } else {
        copy.sort((a,b) => new Date(a.invoice_date) - new Date(b.invoice_date))
      }
    }
    this.setState({
      invoices: copy,
      sortedBy: term,
      sortOrder: newSortOrder
    })
  }
  filterTable() {
    const copy = [...this.state.invoices].filter(el => el.vendor === 'Rosato and Associates')
    console.log(copy)
    this.setState({ invoices: copy })
  }
  showDetails(api) {
    this.context.router.push(`/invoices/${api}`)
  }
  render() {
    return (
      <Invoices
        {...this.state}
        sortTable={this.sortTable}
        showDetails={this.showDetails}
        filterTable={this.filterTable}
      />
    )
  }
}

InvoicesContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default InvoicesContainer
