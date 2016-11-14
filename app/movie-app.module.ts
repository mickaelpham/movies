import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { MovieAppComponent }   from './movie-app.component';
import { MoviesComponent }     from './movies.component';
import { CategoriesComponent } from './categories.component';
import { TopNavbarComponent }  from './top-navbar.component';
import { OverviewComponent }   from './overview.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    MovieAppComponent,
    MoviesComponent,
    CategoriesComponent,
    TopNavbarComponent,
    OverviewComponent
  ],
  bootstrap: [MovieAppComponent]
})
export class MovieAppModule { }
