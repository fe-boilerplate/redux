import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './LinkItem.module.styl'

export default CSSModules(({ onClick, href, isActive, title, isFixed }) => (
  <li styleName={`item ${isActive ? 'active' : ''} ${isFixed ? 'fixed' : ''}`}>
    <a href={href} onClick={onClick}>
      {title}
    </a>
  </li>
), styles, {allowMultiple: true})
