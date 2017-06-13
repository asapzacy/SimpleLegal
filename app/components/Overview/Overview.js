import React from 'react'
import Header from './Header'
import Stat from './Stat'
import { formatPrice } from 'helpers/utils'
import s from './Overview.scss'

const Overview = ({ stats }) => (
  <section className={s.container}>
    <Header />
    <main className={s.main}>
      <div className={s.row} style={{width:'40%'}}>
        <Stat text={'Total Revenue'} stat={formatPrice(stats.revenue)} />
      </div>
      <div className={s.row} style={{width:'70%'}}>
        <Stat text={'Count'} stat={stats.count} />
        <Stat text={'Approved'} stat={stats.approved} color={'darkgreen'} />
        <Stat text={'Received'} stat={stats.received} color={'goldenrod'} />
      </div>
      <div className={s.row} style={{width:'80%'}}>
        <Stat text={'Top Vendor'} stat={`${stats.topVendor[0]} (${stats.topVendor[1]})`} />
        <Stat text={'Lowest Vendor'} stat={`${stats.lowestVendor[0]} (${stats.lowestVendor[1]})`} />
      </div>
    </main>
  </section>
)

export default Overview
