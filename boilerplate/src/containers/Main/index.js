import React, { PureComponent, PropTypes } from 'react'
import { Match, NavigationPrompt } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
import Topbar from 'components/Topbar/'
import Header from 'components/Header/'
import Footer from 'components/Footer/'
import Navbar from 'components/Navbar/'
import 'fe-reset'

@CSSModules(styles)
export default class extends PureComponent {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }
  static childContextTypes = {
    routes: PropTypes.array.isRequired
  }
  getChildContext () {
    const { routes } = this.props
    return { routes }
  }
  updateTitle = (location = window.location) => {
    const route = this.props.routes.filter(route => route.pattern === location.pathname)
    if (route && route[0]) document.title = route[0].title
  }
  componentWillMount () {
    this.updateTitle()
  }
  render () {
    const { routes } = this.props
    return (<div styleName='wrap'>
      <Topbar />
      <div styleName='inner'>
        <Header />
        <Navbar />
        {routes.map((route, i) => (
          <Match exactly key={i} {...route} render={props => (
            <route.component title={route.title} {...props} routes={route.routes} />
          )} />
        ))}
        <NavigationPrompt message={location => {
          this.updateTitle(location)
        }} />
      </div>
      <Footer />
    </div>)
  }
}
