import React from 'react'
import { formatPrice } from 'helpers/utils'

const Matter = ({ timekeeper, level, date, price, description }) => (
  <article style={{marginBottom:'2em'}}>
    <h5>
      <strong>{`Timekeeper: `}</strong>
      <span>{timekeeper ? `${timekeeper} (${level})` : '-'}</span>
    </h5>
    <h5>
      <strong>{`Date: `}</strong>
      <span>{date}</span>
    </h5>
    <h5>
      <strong>{`Price: `}</strong>
      <span>{formatPrice(price)}</span>
    </h5>
    <h5>
      <strong>{`Description: `}</strong>
      <span>{description}</span>
    </h5>
  </article>
)

export default Matter
