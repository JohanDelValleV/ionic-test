import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'planets', loadChildren: './pages/planets/planets.module#PlanetsPageModule' },
  { path: 'people', loadChildren: './pages/people/people.module#PeoplePageModule' },
  { path: 'starships', loadChildren: './pages/starships/starships.module#StarshipsPageModule' },
  { path: 'planets/:id', loadChildren: './pages/description-planets/description-planets.module#DescriptionPlanetsPageModule', data: { name: 'planetsDetail'} },
  { path: 'people/:id', loadChildren: './pages/description-people/description-people.module#DescriptionPeoplePageModule', data: { name: 'peopleDetail' } },
  { path: 'starships/:id', loadChildren: './pages/description-starships/description-starships.module#DescriptionStarshipsPageModule', data: { name: 'starshipsDetail' } },
  { path: 'images', loadChildren: './pages/images/images.module#ImagesPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
