import { createRouter, createWebHistory } from 'vue-router'
import TheContainer from '@/components/TheContainer.vue'
import TheInstructions from '@/components/TheInstructions.vue'
import TheContactForm from '@/components/TheContactForm.vue'
import NotFound from '@/components/NotFound.vue'
import TheSearch from '@/components/TheSearch.vue'
import TheNearby from '@/components/TheNearby.vue'
import ThePropaganda from '@/components/ThePropaganda.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'JAPA JÁ | Home' },
      component: ThePropaganda
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
          component: TheInstructions
        },
        {
          path: 'contact',
          alias: 'contato',
          meta: { title: 'JAPA JÁ | Contato' },
          component: TheContactForm
        },
        {
          path: 'search',
          alias: 'results',
          meta: { title: 'JAPA JÁ | Resultados' },
          component: TheSearch
        },
        {
          path: 'nearby',
          alias: 'porperto',
          meta: { title: 'JAPA JÁ | Por Perto' },
          component: TheNearby
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