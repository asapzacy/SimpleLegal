import React from 'react'
import Row from './Row'
import { table_categories } from 'data/table_categories'
import ArrowDown from 'react-icons/lib/io/arrow-down-b'
import ArrowUp from 'react-icons/lib/io/arrow-up-b'
import s from './Table.scss'

const Table = ({ invoices, activePage, sortTable, sortedBy, sortOrder, showDetails }) => (
  <table className={s.table}>
    <thead className={s.tableHead}>
      <tr>
        { table_categories.map((el, i) => (
          <th onClick={() => sortTable(el)} className={s.category} key={i}>
            {el}
            <span className={sortedBy === el ? s.iconActivated : s.icon}>
              { sortOrder ? <ArrowDown /> : <ArrowUp /> }
            </span>
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
          isActive={activePage === el.id}
          showDetails={showDetails}
          key={i}
        />)
      )}
    </tbody>
  </table>
)
export default Table
