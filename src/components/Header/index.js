import React, { Component } from 'react'
import { Redirect, Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'

@CSSModules(styles)
export default class extends Component {
  state = {
    query: '',
    to: ''
  }
  render () {
    const { to, query } = this.state
    return (<div styleName='wrap'>
      <span styleName='logo'>
        <Link to='/'>LMall.com</Link>
      </span>
      <div styleName='search'>
        { to && <Redirect key={+new Date()} to={to} push /> }
        <form action='/search' onSubmit={e => {
          e.preventDefault()
          e.target.reset()
          this.setState({
            to: `/search?${query}`
          })
        }}>
          <span styleName='input'>
            <input autoComplete='off' onChange={({ target }) => this.setState({query: target.value})} value={this.state.query} name='query' />
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
