import React, { PureComponent } from 'react'
import { Redirect, Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'

@CSSModules(styles)
export default class extends PureComponent {
  state = {
    query: '',
    to: ''
  }
  render () {
    return (<div styleName='wrap'>
      <span styleName='logo'>
        <Link to='/'>LMall.com</Link>
      </span>
      <div styleName='search'>
        { this.state.to && <Redirect to={this.state.to} /> }
        <form action='/search' onSubmit={e => {
          e.preventDefault()
          e.target.reset()
          this.setState({
            to: '/search?' + this.state.query
          })
        }}>
          <span styleName='input'>
            <input onChange={e => this.setState({query: e.value})} value={this.state.query} name='query' />
          </span>
          <button type='submit'>search</button>
        </form>
      </div>
      <div styleName='right'>
        <span styleName='cart'><Link to='/shopping-cart'>购物车 0</Link></span>
        <span styleName='order'><Link to='/order'>我的订单</Link></span>
      </div>
    </div>)
  }
}
