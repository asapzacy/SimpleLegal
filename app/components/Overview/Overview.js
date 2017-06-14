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
        <Stat text={'Total Revenue'} stat={formatPrice(stats.revenue)} />
        <Stat text={'Oldest Invoice'} stat={stats.dates[0]} />
        <Stat text={'Newest Invoice'} stat={stats.dates[1]} />
      </div>
      <div className={s.row}>
        <Stat text={'Count'} stat={stats.count} />
        <Stat text={'Approved'} stat={stats.approved} />
        <Stat text={'Received'} stat={stats.received} />
      </div>
      <div className={s.row}>
        <Stat filterTable={filterTable} text={'Top Vendor'} stat={`${stats.topVendor[0]} (${stats.topVendor[1]})`} />
        <Stat text={'Lowest Vendor'} stat={`${stats.lowestVendor[0]} (${stats.lowestVendor[1]})`} />
      </div>
    </main>
  </section>
)

export default Overview
