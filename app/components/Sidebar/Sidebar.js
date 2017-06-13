import React from 'react'
import { Link } from 'react-router'
import { Logo } from 'components'
import { app_pages } from 'data/app_pages'
import s from './Sidebar.scss'

const createBgImg = (icon) => ({
  backgroundImage:`url(/assets/icons/${icon}.svg)`
})

const Sidebar = () => (
  <aside className={s.container}>
    <nav className={s.menu}>
      <ul className={s.list}>
        { app_pages.map((el, i) => (
            <li className={s.item} key={i}>
              <Link to={el.url}  className={s.link} title={`SimpleLegal | ${el.name}`} activeClassName={'active'} onlyActiveOnIndex>
                { !el.isHomePage &&
                  <span className={s.icon} style={createBgImg(el.icon)}></span>
                }
                { !el.isHomePage ?  el.name : <Logo height={'2.5em'} /> }
              </Link>
            </li>)
          )
        }
      </ul>
    </nav>
  </aside>
)

export default Sidebar
