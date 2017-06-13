import React from 'react'
import { formatPrice } from 'helpers/utils'
import s from './Overview.scss'

const Overview = ({ stats }) => (
  <section className={s.container}>
    <header className={s.header}>{'Overview'}</header>
    <main>
      <section>
        {`Total Revenue: ${formatPrice(stats.revenue)}`}
      </section>
      <section>
        {`Approved / Count: ${stats.approved}/${stats.count}`}
      </section>
      <section>
        {`Received / Count: ${stats.received}/${stats.count}`}
      </section>
      <section>
        {`Oldest Invoice: ${stats.oldest}`}
      </section>
      <section>
        {`Newest Invoice: ${stats.newest}`}
      </section>
      <section>
        {`Top Vendor: ${stats.topVendor[0]} (${stats.topVendor[1]})`}
      </section>
      <section>
        {`Lowest Vendor: ${stats.lowestVendor[0]} (${stats.lowestVendor[1]})`}
      </section>


    </main>
  </section>
)

export default Overview
