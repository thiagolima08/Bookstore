import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksCardsComponent } from './books-cards/books-cards.component';
import { AutoajudaComponent } from './categorias/autoajuda/autoajuda.component';
import { DidaticoComponent } from './categorias/didatico/didatico.component';
import { InfantojuvenilComponent } from './categorias/infantojuvenil/infantojuvenil.component';
import { InformaticaComponent } from './categorias/informatica/informatica.component';
import { TerrorComponent } from './categorias/terror/terror.component';
import { RomanceComponent } from './categorias/romance/romance.component';
import { BooksellComponent } from './booksell/booksell.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';


const routes: Routes = [
  { path: '', component: BooksCardsComponent},
  { path: 'autoajuda', component: AutoajudaComponent},
  { path: 'didatico', component: DidaticoComponent},
  { path: 'infantojuvenil', component: InfantojuvenilComponent},
  { path: 'informatica', component: InformaticaComponent},
  { path: 'terror', component: TerrorComponent},
  { path: 'romance', component: RomanceComponent},
  { path: 'booksell/:id', component: BooksellComponent},
  { path: 'infantojuvenil/booksell/:id', component: BooksellComponent},
  { path: 'romance/booksell/:id', component: BooksellComponent},
  { path: 'terror/booksell/:id', component: BooksellComponent},
  { path: 'didatico/booksell/:id', component: BooksellComponent},
  { path: 'autoajuda/booksell/:id', component: BooksellComponent},
  { path: 'informatica/booksell/:id', component: BooksellComponent},
  { path: 'search-filter', component: SearchFilterComponent},
  { path: 'search-filter/booksell/:id', component: BooksellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
