import React from 'react'
import s from './Stat.scss'

const Stat = ({ text, stat, color }) => (
  <section className={s.container}>
    <h2 className={s.text}>{`${text}:`}</h2>
    <span className={s.stat}>{stat}</span>
  </section>
)

export default Stat
