import React from 'react'
import Header from './Header'
import Stat from './Stat'
import { formatPrice } from 'helpers/utils'
import s from './Overview.scss'

const Overview = ({ stats, filterTable, filteredBy }) => (
  <section className={s.container}>
    <Header />
    <main className={s.main}>
      <div className={s.row}>
        <Stat
          fn={filterTable}
          text={'Total Revenue'}
          filteredBy={filteredBy}
          stat={stats.revenue} />
        <Stat
          fn={filterTable}
          text={'Oldest Invoice'}
          filteredBy={filteredBy}
          stat={stats.dates[0]} />
        <Stat
          fn={filterTable}
          text={'Newest Invoice'}
          filteredBy={filteredBy}
          stat={stats.dates[1]} />
      </div>
      <div className={s.row}>
        <Stat
          fn={filterTable}
          text={'Total'}
          filteredBy={filteredBy}
          stat={stats.count} />
        <Stat
          fn={filterTable}
          text={'Approved'}
          filteredBy={filteredBy}
          stat={stats.approved} />
        <Stat
          fn={filterTable}
          text={'Received'}
          filteredBy={filteredBy}
          stat={stats.received} />
      </div>
      <div className={s.row}>
        <Stat
          fn={filterTable}
          text={'Top Vendor'}
          filteredBy={filteredBy}
          stat={`${stats.topVendor[0]} (${stats.topVendor[1]})`} />
        <Stat
          text={'Lowest Vendor'}
          fn={filterTable}
          filteredBy={filteredBy}
          stat={`${stats.lowestVendor[0]} (${stats.lowestVendor[1]})`} />
      </div>
    </main>
  </section>
)

export default Overview
