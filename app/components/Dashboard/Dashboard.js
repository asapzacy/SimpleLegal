import React from 'react'
import { DetailsContainer } from 'containers'
import { Overview, Details, Table } from 'components'
import s from './Dashboard.scss'

const Dashboard = ({ invoices, activePage, stats, sortTable, sortedBy, sortOrder, showDetails, filterTable }) => (
  <section className={s.container}>
    <section className={s.topHalf}>
      { activePage
        ? <DetailsContainer invoices={invoices} activePage={activePage} />
        : <Overview stats={stats} filterTable={filterTable} />
      }
    </section>
    <section className={s.bottomHalf}>
      <Table invoices={invoices} activePage={activePage} sortTable={sortTable} sortedBy={sortedBy} sortOrder={sortOrder}
        showDetails={showDetails} />
    </section>
  </section>
)

export default Dashboard
