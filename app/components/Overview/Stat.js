import React from 'react'
import Close from 'react-icons/lib/io/ios-close-empty'
import s from './Stat.scss'

const Stat = ({ text, stat, fn, isActive }) => (
  <section className={s.container} onClick={() => fn(text)}>
    <header className={s.header}>
      <h2 className={s.text}>{`${text}:`}</h2>
      <span className={s.icon} style={{opacity:isActive && 1}}><Close /></span>
    </header>
    <span className={s.stat}>{stat}</span>
  </section>
)

export default Stat
