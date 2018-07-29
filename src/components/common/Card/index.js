import React from 'react'
import style from './styles.css'

const Card = props => <div className={style.container}>
  {props.children}
</div>

export default Card