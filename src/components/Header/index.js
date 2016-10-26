import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
export default CSSModules(props => {
  return (<div styleName='wrap'>
    <span styleName='logo'>
      <Link to='/'>LMall.com</Link>
    </span>
    <div styleName='search'>
      <form action='/search'>
        <span styleName='input'>
          <input name='query' />
        </span>
        <button type='submit'>search</button>
      </form>
    </div>
    <div styleName='right'>
      <span styleName='cart'><Link to='shopping-cart'>购物车 0</Link></span>
      <span styleName='order'><Link to='order'>我的订单</Link></span>
    </div>
  </div>)
}, styles)
