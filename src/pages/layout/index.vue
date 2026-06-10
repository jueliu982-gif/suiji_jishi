<template>
  <div class="layout">
    <div class="header">
      <router-link class="links" to="/">首页</router-link>
      <router-link class="links" to="/jishi">随机技师</router-link>
      <router-link class="links" :to="{ name: 'droutes', params: { id: 1 }, query: { type: 1 } }">动态路由</router-link>
      <router-link class="links" :to="{ name: 'qChild' }">嵌套路由</router-link>
      <div>
        <button @click="changeThemeFn(0)">红色主题</button>
        <button @click="changeThemeFn(1)">蓝色主题</button>
        <button @click="changeThemeFn(-1)">恢复默认主题</button>
      </div>
    </div>
    <div class="content-box">
      <div class="left-nav">
        <div class="links" @click="navigatorTo(4)">首页</div>
        <div class="links" @click="navigatorTo(1)">随机技师</div>
        <div class="links" @click="navigatorTo(2)">动态路由</div>
        <div class="links" @click="navigatorTo(3)">嵌套路由</div>
        <div class="links" @click="navigatorTo(5)">测试板块</div>
        <div class="links" @click="navigatorTo(6)">移动练习</div>
        <div class="links" @click="navigatorTo(7)">PDF</div>
      </div>
      <div class="content">
        <router-view v-slot="{ Component }">

          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>

    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useTheme from '@/hooks/useTheme.js'
const router = useRouter()
const { changeThemeFn } = useTheme()
function navigatorTo(type) {
  let routeOPtions = {}
  switch (type) {
    case 1:
      routeOPtions = {
        path: '/jishi',
        replace: true
      }
      break
    case 2:
      routeOPtions = {
        name: 'droutes',
        params: {
          id: 1
        },
        query: {
          type: 1
        }
      }
      break
    case 3:
      routeOPtions = {
        name: 'qChild'
      }
      break
    case 4:
      routeOPtions = {
        path: '/'
      }
      break
    case 5:
      routeOPtions = {
        path: '/test'
      }
      break
    case 6:
      routeOPtions = {
        path: '/mobile-practice'
      }
      break
      case 7:
      routeOPtions = {
        path: '/pdf'
      }
  }
  router.push(routeOPtions)
}

// -----------------------------
class Parent {
  static a = 1
  constructor() {
    this.name = '张三',
      this.age = '28'
  }
  static say() {
    console.log(this.name, 'name')
  }

}
const p = new Parent
</script>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  // overflow: hidden;

  .header {
    width: 100%;
    height: 100px;
    background: var(--theme-color);
    display: flex;
    justify-content: flex-start;
  }

  .content-box {
    height: calc(100vh - 100px);
    display: flex;
    justify-items: flex-start;

    .left-nav {
      width: 250px;
      background-color: var(--theme-color);
    }

    .content {
      flex: 1;
      background: #ccc;
    }
  }
}
</style>
