import React from 'react'
import { Link } from 'react-router'
import { Loading } from 'components'


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

const Active = () => (
  <span>{'active'}</span>
)

const Details = () => (
  <span>{'details'}</span>
)



const Invoices = ({ invoices, isLoading, sortTable, activeInvoice }) => (
  <div>
    { isLoading
      ? <Loading />
      : <div>
          { activeInvoice ? <Active /> : <Details /> }
          <table>
            <thead>
              <tr>
                <td onClick={() => sortTable('vendor')}>{'vendor'}</td>
                <td onClick={() => sortTable('price')}>{'price'}</td>
                <td onClick={() => sortTable('date')}>{'date'}</td>
                <td onClick={() => sortTable('number')}>{'number'}</td>
                <td onClick={() => sortTable('status')}>{'status'}</td>
              </tr>

            </thead>
            <tbody>
              { console.log(invoices) }
              { invoices.map((el, i) => (
                <Item
                  vendor={el.vendor}
                  price={el.total}
                  date={el.invoice_date}
                  number={el.invoice_number}
                  id={el.id}
                  status={el.status}
                  key={i}
                />)
              )}
            </tbody>
          </table>
        </div>
    }
  </div>
)

export default Invoices
