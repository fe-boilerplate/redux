import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
export default CSSModules(() => {
  return (<div styleName='wrap'>
    <div styleName='inner'>
      <span>LMall首页</span>
    </div>
  </div>)
}, styles)
