import React from 'react'
import { Overview, Loading } from 'components'

const Details = ({ isActive, isLoading, details, invoices }) => (
  <div style={{height:'100%',width:'100%'}}>
    {
      !isActive
        ? <Overview invoices={invoices} />
        : isLoading
          ? <Loading />
          : <h2>{details.vendor}</h2>
    }
  </div>
)

export default Details
