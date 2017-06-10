import React from 'react'
import { Link } from 'react-router'
import { Loading, Dashboard } from 'components'
import s from './Invoices.scss'

const Invoices = ({ invoices, isLoading, isError, activeInvoice }) => (
  <div className={s.container}>
    { isLoading
      ? <Loading />
      : isError
        ? <h1>{'error'}</h1>
        : <Dashboard invoices={invoices} activeInvoice={activeInvoice} />
    }
  </div>
)

export default Invoices
