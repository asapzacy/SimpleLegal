import React, { Component } from 'react'
import { Header, Footer, Loading, Sidebar } from 'components'
import { getInvoices } from 'helpers/api'
import s from './Main.scss'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
    }
    this.sortTable = this.sortTable.bind(this)
    this.loadSampleInvoices = this.loadSampleInvoices.bind(this)
  }
  componentDidMount() {
  }
  loadSampleInvoices() {
    this.makeRequest()

  }
  makeRequest() {
   this.setState({ isLoading: true }, () => {
     getInvoices()
       .then(data => {
         this.setState({
           isLoading: false,
           invoices: data.results
         }, () => this.delay())
       })
       .catch(error => {
         this.setState({
           isLoading: false,
           isError: true
         })
         throw new Error(error)
       })
    })
  }
  delay() {
    if (this.state.isLoading) {
      this.delayId = setTimeout(() => {
        this.setState({
          isLoading: false,
          hasLoaded: true
        })
      }, 1220)
    }
  }
  sortTable(category) {
    console.log(category)
    const copy = this.state.invoices
    console.log(copy)
    if (category === 'vendor') {
      copy.sort((a,b) => a.vendor.localeCompare(b.vendor))
    } else if (category === 'price') {
      copy.sort((a,b) => a.total - b.total)
    }
    this.setState({ invoices: copy })
  }
  render() {
    return (
      <div className={s.outerContainer}>
        <Sidebar />
        <main className={s.innerContainer}>
          { React.cloneElement(this.props.children) }
        </main>
      </div>
    )
  }
}

export default MainContainer
