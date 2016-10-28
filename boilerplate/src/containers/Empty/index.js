import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'

export default class extends PureComponent {
  static contextTypes = {
    routes: PropTypes.array.isRequired
  }
  render () {
    const { pattern, title } = this.props
    return (<div>
      <h1>{title} | {pattern}</h1>
      <br />
      <Link to='/'>RETURN</Link>
    </div>)
  }
}
