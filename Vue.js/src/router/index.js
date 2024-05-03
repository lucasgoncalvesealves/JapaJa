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
          alias: 'sobre',
          meta: { title: 'JAPA JÁ | Sobre' },
          component: TheInstructions,
        },
        {
          path: 'contact',
          alias: 'contato',
          meta: { title: 'JAPA JÁ | Contato' },
          component: TheContactForm
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          meta: { title: 'JAPA JÁ | Erro 404' },
          component: NotFound
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router
