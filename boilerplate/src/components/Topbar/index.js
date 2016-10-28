import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
export default CSSModules(() => {
  return (<div styleName='wrap'>
    <div styleName='inner'>
      <div styleName='left'>
        <Link to='/'>LMall 首页</Link>
      </div>
      <div styleName='right'>
        <Link styleName='sep' to='/logout'>欢迎你, xx 退出</Link>
        <Link to='/my'>我的 LMall<em styleName='badge'>NEW</em><span styleName='arrow' /></Link>
        <Link to='/help'>帮助中心</Link>
        <Link to='/service'>在线客服</Link>
      </div>
    </div>
  </div>)
}, styles)
