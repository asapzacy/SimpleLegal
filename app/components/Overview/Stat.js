import React from 'react'
import s from './Stat.scss'

const Stat = ({ text, stat, filterTable }) => (
  <section className={s.container} onClick={filterTable}>
    <header className={s.header}>
      <h2 className={s.text}>{`${text}:`}</h2>
    </header>
    <span className={s.stat}>{stat}</span>
  </section>
)

export default Stat
