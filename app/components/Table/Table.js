import React from 'react'
import Row from './Row'
import s from './Table.scss'

const Table = ({ invoices }) => (
  <section className={s.tableContainer}>
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <th>{'vendor'}</th>
          <th style={{textAlign:'right'}}>{'price'}</th>
          <th style={{textAlign:'right'}}>{'date'}</th>
          <th style={{textAlign:'right'}}>{'id'}</th>
          <th>{'status'}</th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        { invoices.map((el, i) => (
          <Row
            vendor={el.vendor}
            price={el.total}
            date={el.invoice_date}
            id={el.invoice_number}
            status={el.status}
            api={el.id}
            key={i}
          />)
        )}
      </tbody>
    </table>
  </section>
)
export default Table

// const Row = ({ vendor, price }) => (
//   <tr>
//     <td>{vendor}</td>
//     <td>{`$${price.toLocaleString(undefined,{ maximumFractionDigits: 2 })}`}</td>
//   </tr>
// )

const Item = ({ vendor, price, date, id, number, status }) => (
  <tr>
    <td>{vendor}</td>
    <td>{`$${price.toLocaleString(undefined,{ maximumFractionDigits: 2 })}`}</td>
    <td>{date.toLocaleString()}</td>
    <td>{`#${number}`}</td>
    <td>{status}</td>
    <td><Link to={`/invoices/${id}`}>{'more info'}</Link></td>
  </tr>
)
