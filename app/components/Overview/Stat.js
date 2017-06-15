import React from 'react'
import s from './Stat.scss'

const Stat = ({ text, stat, fn }) => (
  <section className={s.container} onClick={() => fn(text)}>
    <header className={s.header}>
      <h2 className={s.text}>{`${text}:`}</h2>
    </header>
    <span className={s.stat}>{stat}</span>
  </section>
)

export default Stat
