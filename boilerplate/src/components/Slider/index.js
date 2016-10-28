import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
export default CSSModules(() => {
  return (<div styleName='wrap'>
    <ul>
      <li>
        <img width='700' height='350' src='http://static1.ljcdn.com/pc/asset/img/haiwai/site/header-banner.jpg' />
      </li>
      <li>
        <img width='700' height='350' src='http://static1.ljcdn.com/pc/asset/img/home/bg-appV2.jpg' />
      </li>
      <li>
        <img width='700' height='350' src='http://static1.ljcdn.com/pc/asset/img/haiwai/site/header-banner.jpg' />
      </li>
      <li>
        <img width='700' height='350' src='http://static1.ljcdn.com/pc/asset/img/home/bg-appV2.jpg' />
      </li>
    </ul>
  </div>)
}, styles)
