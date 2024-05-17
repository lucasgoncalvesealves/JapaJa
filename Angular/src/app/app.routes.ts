import { Routes } from '@angular/router';
import { ThePropagandaComponent } from './the-propaganda/the-propaganda.component';
import { TheContainerComponent } from './the-container/the-container.component';
import { TheInstructionsComponent } from './the-instructions/the-instructions.component';
import { TheContactFormComponent } from './the-contact-form/the-contact-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TheSearchComponent } from './the-search/the-search.component';
import { TheNearbyComponent } from './the-nearby/the-nearby.component';

export const routes: Routes = [
    { path: '', 
      component: ThePropagandaComponent,
      title: 'JAPA JÁ | Home'
    },
    {
        path: '',
        component: TheContainerComponent,
        children: [
          {
            path: 'about',
            component: TheInstructionsComponent,
            title: 'JAPA JÁ | Sobre'
          },
          {
            path: 'contact',
            component: TheContactFormComponent,
            title: 'JAPA JÁ | Contato'
          },
          {
            path: 'search',
            component: TheSearchComponent,
            title: 'JAPA JÁ | Resultados'
          },
          {
            path: 'nearby',
            component: TheNearbyComponent,
            title: 'JAPA JÁ | Por Perto'
          },
          {
            path: '**',
            component: NotFoundComponent,
            title: 'JAPA JÁ | Erro 404'
          }
        ]
      }
];
