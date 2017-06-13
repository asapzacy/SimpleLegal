import React from 'react'
import { Link } from 'react-router'
import { Details } from 'components'
import s from './Dashboard.scss'

const Dashboard = ({ activeInvoice, invoices }) => (
  <section className={s.container}>
    <section className={s.topHalf}>
      { activeInvoice ? <h2>{activeInvoice}</h2> : <Details /> }
    </section>
    <section className={s.bottomHalf}>
      <Table invoices={invoices} />

    </section>
  </section>
)

export default Dashboard



const Table = ({ invoices }) => (
  <section className={s.tableContainer}>
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <td>{'vendor'}</td>
          <td>{'price'}</td>
          <td>{'date'}</td>
          <td>{'number'}</td>
          <td>{'status'}</td>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        { invoices.map((el, i) => (
          <Item
            vendor={el.vendor}
            price={el.total}
            date={el.invoice_date}
            number={el.invoice_number}
            status={el.status}
            id={el.id}
            key={i}
          />)
        )}
      </tbody>
    </table>
  </section>
)

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
