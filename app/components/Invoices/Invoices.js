import React from 'react'
import { Loading, Error, Dashboard } from 'components'
import s from './Invoices.scss'

const Invoices = ({ isLoading, isError, ...props }) => (
  <div>
    {
      isLoading
        ? <Loading />
        : isError
          ? <Error />
          : <Dashboard {...props} />
    }
  </div>
)

export default Invoices
