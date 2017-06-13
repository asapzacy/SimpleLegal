import React from 'react'
import { capitalizeString } from 'helpers/utils'
import s from './Other.scss'

const Other = ({ route }) => (
  <section className={s.container}>
    <h1 className={s.title}>{capitalizeString(route.path)}</h1>
  </section>
)

export default Other
