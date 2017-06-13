import React, { Component } from 'react'
import { Details } from 'components'
import { getDetails } from 'helpers/api'
import { formatPrice } from 'helpers/utils'

class DetailsContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isActive: false,
      details: {}
    }
  }
  componentDidMount() {
    if (this.props.active) {
      console.log('hi')
      this.setState({ isActive: true })
      this.makeRequest(this.props.active)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.setState({
        isActive: true,
        isLoading: true
      }, () => this.makeRequest(nextProps.active))
    } else {
      this.setState({
        isActive: false,
        isLoading: false
      })
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
    return <Details {...this.state} {...this.props} />
  }
}

export default DetailsContainer
