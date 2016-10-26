import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
import LinkItem from './LinkItem'

const Sidebar = (props, { routes }) => {
  const categoryRoutes = routes.filter(route => /^\/category\//.test(route.pattern))
  return (<ul styleName='wrap'>
    {
      categoryRoutes.map((route, i) => <Link key={i} to={route.pattern}>
        {
          params => <LinkItem title={route.title} {...params} />
        }
      </Link>)
    }
  </ul>)
}

Sidebar.contextTypes = {
  routes: PropTypes.array.isRequired
}

export default CSSModules(Sidebar, styles)
