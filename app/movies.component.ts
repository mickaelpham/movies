import { Component } from '@angular/core';

import { Movie } from './movie';

const MOVIES: Movie[] = [
  new Movie(1, 'Eternal sunshine of the spotless mind', '', false),
  new Movie(2, 'Pulp Fiction', '', true),
  new Movie(3, 'Back to the Future', '', false),
  new Movie(4, 'V for Vendetta', '', false)
];

@Component({
  moduleId:    module.id,
  selector:    'my-movies',
  templateUrl: 'movies.component.html',
  styleUrls:   ['movies.component.css']
})
export class MoviesComponent {
  movies = MOVIES;
}
