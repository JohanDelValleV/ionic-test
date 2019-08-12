import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DescriptionPeoplePage } from './description-people.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionPeoplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DescriptionPeoplePage]
})
export class DescriptionPeoplePageModule {}
