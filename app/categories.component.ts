import { Component } from '@angular/core';

import { Category } from './category';

const CATEGORIES: Category[] = [
   new Category(1, 'Action'),
   new Category(2, 'Romance')
];

@Component({
  moduleId:    module.id,
  selector:    'my-categories',
  templateUrl: 'categories.component.html'
})
export class CategoriesComponent {
  categories = CATEGORIES;
}
