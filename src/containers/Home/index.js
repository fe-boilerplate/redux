import React, { PureComponent, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
import Sidebar from 'components/Sidebar/'
import Newsboard from 'components/Newsboard/'
import Quicklinks from 'components/Quicklinks/'
import Slider from 'components/Slider/'
import HotProducts from 'components/HotProducts/'
import Categoryboard from 'components/Categoryboard/'

@CSSModules(styles, {allowMultiple: true})
export default class extends PureComponent {
  static contextTypes = {
    routes: PropTypes.array.isRequired
  }
  render () {
    const { routes } = this.context
    const categoryRoutes = routes.filter(route => /^\/category\//.test(route.pattern))
    return (<div styleName='wrap'>
      <div styleName='left sidebar'><Sidebar /></div>
      <div styleName='wrap right'>
        <div styleName='left slider'>
          <Slider />
        </div>
        <div styleName='right'>
          <Newsboard />
          <Quicklinks />
        </div>
      </div>
      <div styleName='block'>
        <HotProducts />
      </div>
      <div styleName='block'>
        {
          categoryRoutes.map((route, i) => <Categoryboard {...route} key={i} />)
        }
      </div>
    </div>)
  }
}
