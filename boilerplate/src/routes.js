// import React from 'react'
import Home from 'containers/Home/'
import List from 'containers/List/'
import Detail from 'containers/Detail/'
import Empty from 'containers/Empty/'

export default [
  {
    pattern: '/',
    exactly: true,
    component: Home,
    title: '首页'
  },
  {
    pattern: '/market/second-hand',
    title: '二手市场',
    component: Empty
  },
  {
    pattern: '/market/public-welfare',
    title: '爱心公益',
    component: Empty
  },
  {
    pattern: '/market/school',
    title: '链家微校',
    component: Empty
  },
  {
    pattern: '/category',
    component: Empty,
    title: '全部分类'
  },
  {
    pattern: '/category/tools',
    title: '业务工具',
    component: Empty
  },
  {
    pattern: '/category/marketing',
    title: '营销推广',
    component: Empty
  },
  {
    pattern: '/category/grow',
    title: '个人成长',
    component: Empty
  },
  {
    pattern: '/category/appearance',
    title: '职业形象',
    component: Empty
  },
  {
    pattern: '/category/office',
    title: '高效办公',
    component: Empty
  },
  {
    pattern: '/category/life',
    title: '生活服务',
    component: Empty
  },
  {
    pattern: '/category/function',
    title: '职能服务',
    component: Empty
  },
  {
    pattern: '/category/stores',
    title: '门店/大区服务',
    component: Empty
  },
  {
    pattern: '/search',
    title: '搜索结果',
    component: Empty
  },
  {
    pattern: '/shopping-cart',
    title: '购物车',
    component: Empty
  },
  {
    pattern: '/order',
    title: '我的订单',
    component: Empty
  },
  {
    pattern: '/news',
    title: '新闻',
    component: Empty
  },
  {
    pattern: '/logout',
    title: '退出登录',
    component: Empty
  },
  {
    pattern: '/my',
    title: '我的',
    component: Empty
  },
  {
    pattern: '/help',
    title: '帮助中心',
    component: Empty
  },
  {
    pattern: '/service',
    title: '在线客服',
    component: List
  },
  {
    pattern: '/detail',
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
