import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import routes from './routes'
import Main from 'containers/Main/'
render(<BrowserRouter>
  <Main routes={routes} />
</BrowserRouter>, document.getElementById('root'))
