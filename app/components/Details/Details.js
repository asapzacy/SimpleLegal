import React from 'react'
import { Overview, Loading } from 'components'

const Details = ({ isActive, isLoading, details, invoices }) => (
  <section>
    {
      !isActive
        ? <Overview invoices={invoices} />
        : isLoading
          ? <Loading />
          : <h2>{details.vendor}</h2>
    }
  </section>
)

export default Details
