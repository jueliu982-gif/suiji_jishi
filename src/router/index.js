import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home/index.vue'
import Layout from '@/pages/layout/index.vue'
import Jishi from '@/pages/jishi/index.vue'
import Droutes from '@/pages/droutes/index.vue'
import Q from '@/pages/q/index.vue'
import Qchild from '@/pages/q/q-child.vue'
import test from '@/pages/test/index.vue'
import MobilePractice from '@/pages/mobile-practice/index.vue'
import Pdf from '@/pages/pdf/index.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        
      },
      {
        path: '/jishi',
        component: Jishi,
        alias: ['/shi']
      },
      {
        path: '/droutes/:id?',
        component: Droutes,
        name: 'droutes'
      },
      {
        path: '/q',
        component: Q,
        name: 'q',
        children: [
          {
            path: 'q-child',
            component: Qchild,
            name: 'qChild',
            alias: ['/qq']
          }
        ]
      },
      {
        path: '/test',
        component: test
      },
      {
        path: '/pdf',
        component: Pdf
      }
    ]
  },
  {
    path: '/mobile-practice',
    component: MobilePractice
  },
]
const router = {
  history: createWebHashHistory(),
  routes
}

export default createRouter(router)
