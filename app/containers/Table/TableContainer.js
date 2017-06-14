import React, { Component } from 'react'
import { Table } from 'components'

class TableContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return <Table {...this.state} />
  }
}

export default TableContainer
