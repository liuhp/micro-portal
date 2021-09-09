/*
 * @Author: your name
 * @Date: 2021-09-09 09:56:30
 * @LastEditTime: 2021-09-09 22:36:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-portal/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import basicLayout from '../layout/basic-layout';


const home = () => import(/* webpackChunkName: "home" */ '../views/index.vue');
const Iframe = () => import(/* webpackChunkName: "home" */ '../views/iframe.vue');

export default [
  {
    path: '/',
    component: basicLayout,
    redirect: '/micro-portal/',
    meta: {
      title: 'home',
      icon: 'el-icon-s-home',
      breadcrumb: false,
    },
    children: [
      {
        path: '/micro-portal/',
        name: 'home',
        component: home,
        meta: {
          title: `home`,
          icon: 'fin-icon-s-home',
        },
      },
      {
        path: '/show',
        name: 'product-show',
        component: Iframe,
        meta: {
          title: `show`,
        },
      },
    ],
  }
]
