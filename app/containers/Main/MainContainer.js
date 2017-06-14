import React, { Component } from 'react'
import { Sidebar } from 'components'
import s from './Main.scss'

class MainContainer extends Component {
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
