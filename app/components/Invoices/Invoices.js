import React from 'react'
import { Link } from 'react-router'
import { Loading, Dashboard } from 'components'
import s from './Invoices.scss'

const Invoices = ({ isLoading, isError, ...props }) => (
  <div className={s.container}>
    { isLoading
      ? <Loading />
      : isError
        ? <h1>{'error'}</h1>
        : <Dashboard {...props} />
    }
  </div>
)

export default Invoices
