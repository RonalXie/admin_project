import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoardView from "@/views/DashBoard.vue";
import ArticleView from "@/views/ArticleView.vue";
import UserView from "@/views/UserView.vue";
import EditArticleView from "@/views/CreateArticleView.vue";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'dashboard',
    component: DashBoardView
  },
  {
    path: '/articles',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/article/create',
    name: 'article',
    component: EditArticleView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  }
]

const router = new VueRouter({
  routes
})

export default router
