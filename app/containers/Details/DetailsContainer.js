import React, { Component } from 'react'
import { Details } from 'components'
import { getDetails } from 'helpers/api'
import { formatPrice } from 'helpers/utils'

class DetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      details: {}
    }
    this.hideDetails = this.hideDetails.bind(this)
  }
  componentDidMount() {
    this.makeRequest(this.props.active)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active && nextProps.active !== this.props.active) {
      this.setState({
        isLoading: true,
        details: {}
      }, () => this.makeRequest(nextProps.active))
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
  }
  hideDetails() {
    this.context.router.push('/invoices')
  }
  render() {
    return <Details {...this.state} active={this.props.active} hideDetails={this.hideDetails} />
  }
}

DetailsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default DetailsContainer
