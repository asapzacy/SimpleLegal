import React, { Component } from 'react'
import { Details } from 'components'
import { getDetails } from 'helpers/api'
import { formatPrice } from 'helpers/utils'

class DetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isError: false,
      details: {}
    }
    this.hideDetails = this.hideDetails.bind(this)
  }
  componentDidMount() {
    this.makeRequest(this.props.activePage)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activePage && nextProps.activePage !== this.props.activePage) {
      this.setState({
        isLoading: true,
        isError: false,
        details: {}
      }, () => this.makeRequest(nextProps.activePage))
    }
  }
  makeRequest(id) {
    getDetails(id)
      .then(details => {
        this.setState({
          isLoading: false,
          details
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
  hideDetails() {
    this.context.router.push('/invoices')
  }
  render() {
    return (
      <Details
        {...this.state}
        activePage={this.props.activePage}
        hideDetails={this.hideDetails}
      />
    )
  }
}

DetailsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default DetailsContainer
