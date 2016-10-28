import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
export default CSSModules(() => {
  return (<div styleName='wrap'>
    <div styleName='header'>
      <Link styleName='more' to='/news'>更多</Link>
      <span styleName='title'>📣 {{ name }}头条</span>
    </div>
    <ul styleName='list'>
      <li>[爱心] xxxxx</li>
      <li>[爱心] xxxxx</li>
      <li>[爱心] xxxxx</li>
      <li>[爱心] xxxxx</li>
    </ul>
  </div>)
}, styles)
