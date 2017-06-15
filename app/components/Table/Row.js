import React from 'react'
import { formatPrice } from 'helpers/utils'
import s from './Row.scss'

const Row = ({ vendor, price, date, id, status, api, isActive, showDetails }) => (
  <tr className={isActive ? s.rowActivated : s.row} onClick={() => showDetails(api)}>
    <td>{date}</td>
    <td>{vendor}</td>
    <td>{`#${id}`}</td>
    <td>{formatPrice(price)}</td>
    <td>{status}</td>
  </tr>
)

export default Row
