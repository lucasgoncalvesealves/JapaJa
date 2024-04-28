import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheContainer from '@/components/TheContainer.vue'
import TheInstructions from '@/components/TheInstructions.vue'
import TheContactForm from '@/components/TheContactForm.vue'

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
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'about',
          component: TheInstructions,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'contact',
          component: TheContactForm,
        },
      ],
    },
  ]
})

export default router
