import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
export default CSSModules(({ title }) => {
  return (<div styleName='wrap'>
    <div styleName='header'>
      {title}
    </div>
    <div styleName='body'>
      <div styleName='left'>德国加湿器</div>
      <ul styleName='right list'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
      </ul>
    </div>
  </div>)
}, styles, {allowMultiple: true})
