import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Members from '../views/Members.vue'
import News from '../views/News.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Events from '../views/Events.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Members',
    name: 'Members',
    component: Members
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
