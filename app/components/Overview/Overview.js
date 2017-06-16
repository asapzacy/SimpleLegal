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
          isActive={filteredBy === 'Total Revenue'}
          stat={stats.revenue} />
        <Stat
          fn={filterTable}
          text={'Oldest Invoice'}
          isActive={filteredBy === 'Oldest Invoice'}
          stat={stats.dates[0]} />
        <Stat
          fn={filterTable}
          text={'Newest Invoice'}
          isActive={filteredBy === 'Newest Invoice'}
          stat={stats.dates[1]} />
      </div>
      <div className={s.row}>
        <Stat
          fn={filterTable}
          text={'Total'}
          isActive={filteredBy === 'Total'}
          stat={stats.count} />
        <Stat
          fn={filterTable}
          text={'Approved'}
          isActive={filteredBy === 'Approved'}
          stat={stats.approved} />
        <Stat
          fn={filterTable}
          text={'Received'}
          isActive={filteredBy === 'Received'}
          stat={stats.received} />
      </div>
      <div className={s.row}>
        <Stat
          fn={filterTable}
          text={'Top Vendor'}
          isActive={filteredBy === 'Top Vendor'}
          stat={`${stats.topVendor[0]} (${stats.topVendor[1]})`} />
        <Stat
          text={'Lowest Vendor'}
          fn={filterTable}
          isActive={filteredBy === 'Lowest Vendor'}
          stat={`${stats.lowestVendor[0]} (${stats.lowestVendor[1]})`} />
      </div>
    </main>
  </section>
)

export default Overview
