import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent }     from './movies.component';
import { CategoriesComponent } from './categories.component';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  { path: '',           component: OverviewComponent },
  { path: 'movies',     component: MoviesComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
