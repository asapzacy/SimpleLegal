import React from 'react'
import { Link } from 'react-router'
import { Logo } from 'components'
import { app_pages } from 'data/app_pages'
import s from './Sidebar.scss'

const Sidebar = () => (
  <aside className={s.container}>
    <nav className={s.menu}>
      <ul>
        { app_pages.map((el, i) => (
            <li className={s.item} key={i}>
              <Link
                to={el.url}
                className={s.link}
                title={`SimpleLegal | ${el.name}`}
                activeClassName={el.isHomePage ? '' : 'active'}
              >
                { !el.isHomePage &&
                  <span
                    className={s.icon}
                    style={{backgroundImage:`url(/assets/icons/${el.icon}.svg)`}}
                  ></span>
                }
                { el.isHomePage ? <Logo height={'2.5em'} /> : el.name }
              </Link>
            </li>)
          )
        }
      </ul>
    </nav>
  </aside>
)

export default Sidebar
