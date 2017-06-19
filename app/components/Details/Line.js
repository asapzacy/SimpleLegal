import React from 'react'
import { formatPrice } from 'helpers/utils'
import s from './Line.scss'

const Matter = ({ timekeeper, level, date, price, description }) => (
  <article className={s.container}>
    <h5>
      <strong>{`Timekeeper: `}</strong>
      <span>{timekeeper && `${timekeeper} (${level})`}</span>
    </h5>
    <h5>
      <strong>{`Date: `}</strong>
      <span>{date}</span>
    </h5>
    <h5>
      <strong>{`Price: `}</strong>
      <span style={{color:price < 0 && '#ba0021'}}>{formatPrice(price)}</span>
    </h5>
    <h5>
      <strong>{`Description: `}</strong>
      <span>{description}</span>
    </h5>
    <span className={s.bar}></span>
  </article>
)

export default Matter
