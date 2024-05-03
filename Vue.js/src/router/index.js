import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheContainer from '@/components/TheContainer.vue'
import TheInstructions from '@/components/TheInstructions.vue'
import TheContactForm from '@/components/TheContactForm.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      component: TheContainer,
      props: true,
      children: [
        {
          path: 'about',
          component: TheInstructions
        },
        {
          path: 'contact',
          component: TheContactForm
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: NotFound
        }
      ]
    }
  ]
})

export default router
