import React from 'react'
import { Link } from 'react-router'
import { Loading, Dashboard } from 'components'
import s from './Invoices.scss'

const Invoices = ({ isLoading, isError, invoices, active, stats }) => (
  <div className={s.container}>
    { isLoading
      ? <Loading />
      : isError
        ? <h1>{'error'}</h1>
        : <Dashboard invoices={invoices} active={active} stats={stats} />
    }
  </div>
)

export default Invoices
