import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
import slogans from 'constants/slogans'

export default CSSModules(() => {
  return (<div styleName='wrap'>
    <div styleName='slogans'>
      <div styleName='inner'>
        <ul>
          {
            slogans.map((slogan, i) => <li key={i}>
              <span styleName='circle'>{slogan.title}</span><p>{slogan.describe}</p>
            </li>)
          }
        </ul>
      </div>
    </div>
    <div styleName='links'>
      <div styleName='inner'>
        <ul>
          <li>
            <dl>
              <dt>服务保障</dt>
              <dd>正品保证</dd>
              <dd>7天无理由退货</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>售后服务</dt>
              <dd>正品保证</dd>
              <dd>7天无理由退货</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>特色服务</dt>
              <dd>正品保证</dd>
              <dd>7天无理由退货</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>支付方式</dt>
              <dd>正品保证</dd>
              <dd>7天无理由退货</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>帮助中心</dt>
              <dd>正品保证</dd>
              <dd>7天无理由退货</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>联系我们</dt>
              <dd>正品保证</dd>
              <dd>7天无理由退货</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>)
}, styles)
