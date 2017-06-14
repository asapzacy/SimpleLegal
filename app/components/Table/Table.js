import React from 'react'
import Row from './Row'
import ArrowDown from 'react-icons/lib/io/arrow-down-b'
import ArrowUp from 'react-icons/lib/io/arrow-up-b'
import s from './Table.scss'

const categories = [ 'date', 'vendor', 'id', 'price', 'status']

const Table = ({ invoices, active, sortTable, sortedBy, sortOrder, showDetails }) => (
  <section className={s.tableContainer}>
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          { categories.map((el, i) => (
            <th
              onClick={() => sortTable(el)}
              className={sortedBy === el ? s.activated : s.category}
              key={i}
            >
              {el}
              <span className={sortedBy === el ? s.iconActivated : s.icon}>{sortOrder ? <ArrowDown /> : <ArrowUp />}</span>
            </th>)
        )}
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
            isActive={active === el.id}
            showDetails={showDetails}
            key={i}
          />)
        )}
      </tbody>
    </table>
  </section>
)
export default Table
