import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'

const Navbar = (props, context) => {
  const { routes } = context
  const marketRoutes = [routes[0]].concat(routes.filter(route => /^\/market/.test(route.pattern)))
  return (<div styleName='wrap'>
    <ul>
      <li styleName='fixed'>
        <Link to='/category'>全部分类</Link>
      </li>
      {
        marketRoutes.map((route, i) => <li key={i}>
          <Link to={route.pattern} activeClassName={styles.active} isActive={location => location.pathname === route.pattern}>{route.title}</Link>
        </li>)
      }
    </ul>
  </div>)
}

Navbar.contextTypes = {
  routes: PropTypes.array.isRequired
}

export default CSSModules(Navbar, styles)
