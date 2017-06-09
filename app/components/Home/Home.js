import React from 'react'
import { Logo } from 'components'
import s from './Home.scss'

const Home = ({ loadSampleInvoices }) => (
  <section className={s.container}>
    <Logo height={'10em'} />
  </section>
)

export default Home
