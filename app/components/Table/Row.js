import React from 'react'
import { Link } from 'react-router'
import { formatPrice, formatId } from 'helpers/utils'

const Row = ({ vendor, price, date, id, status, api, isActive }) => (
  <tr style={{backgroundColor:isActive && 'purple'}}>
    <td>{vendor}</td>
    <td style={{textAlign:'right'}}>{formatPrice(price)}</td>
    <td style={{textAlign:'right'}}>{date}</td>
    <td style={{textAlign:'right'}}>{`#${id}`}</td>
    <td>{status}</td>
    <td>
      { isActive
        ? <Link to={'/invoices/'}>{'x'}</Link>
        : <Link to={`/invoices/${api}`}>{'more info'}</Link>
      }
    </td>
  </tr>
)

export default Row
