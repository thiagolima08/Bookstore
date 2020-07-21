import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BooksCardsComponent } from './books-cards/books-cards.component';
import { FooterComponent } from './footer/footer.component';
import { AutoajudaComponent } from './categorias/autoajuda/autoajuda.component';
import { DidaticoComponent } from './categorias/didatico/didatico.component';
import { InfantojuvenilComponent } from './categorias/infantojuvenil/infantojuvenil.component';
import { InformaticaComponent } from './categorias/informatica/informatica.component';
import { RomanceComponent } from './categorias/romance/romance.component';
import { TerrorComponent } from './categorias/terror/terror.component';
import { AppServiceService } from './app-service.service';
import { IncrementaCartService } from './incrementa-cart.service';
import { BooksellComponent } from './booksell/booksell.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    BooksCardsComponent,
    FooterComponent,
    AutoajudaComponent,
    DidaticoComponent,
    InfantojuvenilComponent,
    InformaticaComponent,
    RomanceComponent,
    TerrorComponent,
    BooksellComponent,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
  ],
  exports:[],
  providers: [AppServiceService,IncrementaCartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
