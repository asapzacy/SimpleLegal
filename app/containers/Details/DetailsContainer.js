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
  }
  componentDidMount() {
    this.makeRequest(this.props.active)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
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
  render() {
    return <Details {...this.state} active={this.props.active} />
  }
}

export default DetailsContainer
