import React from 'react'
import s from './Stat.scss'

const Stat = ({ text, stat, color }) => (
  <section className={s.container} style={{borderColor:color && color}}>
    <h2 className={s.text}>{`${text} - `}</h2>
    <span className={s.stat} style={{color:color && color}}>{stat}</span>
  </section>
)

export default Stat
