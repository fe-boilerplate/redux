// import React from 'react'
import Home from 'containers/Home/'
import List from 'containers/List/'
import Detail from 'containers/Detail/'

export default [
  { pattern: '/',
    exactly: true,
    component: Home
  },
  { pattern: '/list',
    component: List
  },
  { pattern: '/detail',
    component: Detail,
    routes: [
      { pattern: '/detail/bus',
        component: Detail
      },
      { pattern: '/detail/cart',
        component: Detail
      }
    ]
  }
]
