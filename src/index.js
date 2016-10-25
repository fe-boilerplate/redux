import React from 'react'
import { render } from 'react-dom'
import 'fe-reset'

// 1. import a few components
import { BrowserRouter, Match, Link } from 'react-router'
import routes from './routes'

import TopBar from 'components/TopBar/'
import SideBar from 'components/SideBar/'

const App = ({ history }) => (
  <div>
    <TopBar />
    <SideBar />
    <div style={{
      padding: '10px',
      width: '40%',
      background: '#f0f0f0'
    }}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/list'>List</Link></li>
        <li><Link to='/detail'>Detail</Link></li>
      </ul>
    </div>

    <div style={{ flex: 1, padding: '10px' }}>
      {routes.map((route, i) => (
        <Match key={i} {...route} render={(props) => (
          <route.component {...props} routes={route.routes} />
        )} />
      ))}
    </div>
  </div>
)

render(<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'))
