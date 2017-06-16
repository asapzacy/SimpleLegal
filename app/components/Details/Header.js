import React from 'react'
import Close from 'react-icons/lib/io/ios-close-empty'
import s from './Header.scss'

const Header = ({ id, fn }) => (
  <header className={s.container}>
    <h2 className={s.title}>{`Invoice: #${id}`}</h2>
    <span onClick={fn} className={s.icon}><Close /></span>
  </header>
)

export default Header
