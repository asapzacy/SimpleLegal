import React from 'react'
import Header from './Header'
import Stat from './Stat'
import { formatPrice } from 'helpers/utils'
import s from './Overview.scss'

const Overview = ({ stats, filterTable }) => (
  <section className={s.container}>
    <Header />
    <main className={s.main}>
      <div className={s.row}>
        <Stat fn={filterTable} text={'Total Revenue'} stat={formatPrice(stats.revenue)} />
        <Stat fn={filterTable} text={'Oldest Invoice'} stat={stats.dates[0]} />
        <Stat fn={filterTable} text={'Newest Invoice'} stat={stats.dates[1]} />
      </div>
      <div className={s.row}>
        <Stat fn={filterTable} text={'Total'} stat={stats.count} />
        <Stat fn={filterTable} text={'Approved'} stat={stats.approved} />
        <Stat fn={filterTable} text={'Received'} stat={stats.received} />
      </div>
      <div className={s.row}>
        <Stat fn={filterTable} text={'Top Vendor'} stat={`${stats.topVendor[0]} (${stats.topVendor[1]})`} />
        <Stat fn={filterTable} text={'Lowest Vendor'} stat={`${stats.lowestVendor[0]} (${stats.lowestVendor[1]})`} />
      </div>
    </main>
  </section>
)

export default Overview
