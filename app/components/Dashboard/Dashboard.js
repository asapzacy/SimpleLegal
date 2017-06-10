import React from 'react'
import { Link } from 'react-router'
import { Details } from 'components'
import s from './Dashboard.scss'

const Dashboard = ({ activeInvoice, invoices }) => (
  <section className={s.container}>
    <section className={s.topHalf}>
      { activeInvoice ? <h2>{'active'}</h2> : <Details /> }
    </section>
    <section className={s.bottomHalf}>
      <Table invoices={invoices} />

    </section>
  </section>
)

export default Dashboard



const Table = ({ invoices }) => (
  <table style={{width:'100%'}}>
    <thead>
      { console.log(invoices) }
      {/* <tr>
        <td onClick={() => sortTable('vendor')}>{'vendor'}</td>
        <td onClick={() => sortTable('price')}>{'price'}</td>
        <td onClick={() => sortTable('date')}>{'date'}</td>
        <td onClick={() => sortTable('number')}>{'number'}</td>
        <td onClick={() => sortTable('status')}>{'status'}</td>
      </tr> */}
    </thead>
    <tbody>
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
)

const Item = ({ vendor, price, date, id, number, status }) => (
  <tr>
    <td>{vendor}</td>
    <td>{`$${price.toLocaleString(undefined,{ maximumFractionDigits: 2 })}`}</td>
    <td>{date.toLocaleString()}</td>
    <td>{`#${number}`}</td>
    <td>{status}</td>
    <td><Link to={`/api/invoices/${id}`}>{'more info'}</Link></td>
  </tr>
)
