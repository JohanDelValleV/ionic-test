import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/planets/planets.module').then(m => m.PlanetsPageModule)
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/people/people.module').then(m => m.PeoplePageModule)
          }
        ]
      },
      {
        path: 'starships',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/starships/starships.module').then(m => m.StarshipsPageModule)
          }
        ]
      },
      {
        path: 'images',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/images/images.module').then(m => m.ImagesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/planets',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/planets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
