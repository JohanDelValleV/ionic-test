import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescriptionStarshipsPage } from './description-starships.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionStarshipsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescriptionStarshipsPage]
})
export class DescriptionStarshipsPageModule {}
