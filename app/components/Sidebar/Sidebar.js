import React from 'react'
import { Link } from 'react-router'
import { Logo } from 'components'
import s from './Sidebar.scss'

const Sidebar = () => (
  <aside className={s.container}>
    <menu>
      <nav>
        <li><Link to={'/'}><Logo height={'2.5em'} /></Link></li>
        <li><Link to={'/invoices'}>{'Invoices'}</Link></li>
      </nav>
    </menu>
  </aside>
)

export default Sidebar
