import React, { Component } from 'react'
import { Header, Footer } from 'components'
import s from './Main.scss'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
}
  componentDidMount() {
  }
  render() {
    return (
      <div className={s.outerContainer}>
        <Header />
        <main className={s.innerContainer}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default MainContainer
