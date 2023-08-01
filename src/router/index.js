import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublicNavSidebarCompositions from '@/components/PublicNavSidebarCompositions.vue'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/public/home' },
    {
      path: '/public',
      name: 'public',
      component: PublicNavSidebarCompositions,
      children: [
        {
          path: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
export default routes
