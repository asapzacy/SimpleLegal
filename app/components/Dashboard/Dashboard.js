import React from 'react'
import { Link } from 'react-router'
import { DetailsContainer } from 'containers'
import { Overview, Details, Table, Loading } from 'components'
import s from './Dashboard.scss'

const Dashboard = ({ invoices, active, stats, sortTable, sortedBy, sortOrder }) => (
  <section className={s.container}>
    <section className={s.topHalf}>
      { active
        ? <DetailsContainer invoices={invoices} active={active} />
        : <Overview stats={stats} />
      }
    </section>
    <section className={s.bottomHalf}>
      <Table invoices={invoices} active={active} sortTable={sortTable} sortedBy={sortedBy} sortOrder={sortOrder} />
    </section>
  </section>
)

export default Dashboard
