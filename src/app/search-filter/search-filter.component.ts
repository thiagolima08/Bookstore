import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppServiceService } from '../app-service.service';
import { IncrementaCartService } from './../incrementa-cart.service';
import { AppComponent } from './../app.component';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})


export class SearchFilterComponent {

  books=[];
  booklist = [];
  input:String;

  constructor(private AppServiceService: AppServiceService, private IncrementaCartService: IncrementaCartService, private snackbar: MatSnackBar, private destroyComp: AppComponent, private router:Router)
  { this.router = router }

  ngDoCheck(){
    this.input = this.AppServiceService.getInput();
    if(this.input){
      this.books = this.AppServiceService.getBooks().filter(b => b.titulo.toLowerCase().includes(this.input.toLowerCase()) || b.autor.toLowerCase().includes(this.input.toLowerCase()))
      if(this.books.length===0){
        this.openSnackBar("Livro não encontrado! Tente novamente.", "Fechar")
        this.router.navigate(["/"]);
      }
    }
  }

  IncrementaCart(id){
    this.IncrementaCartService.setItens();
    this.booklist = this.IncrementaCartService.getBookList();
    this.openSnackBar();
    this.booklist.push(this.AppServiceService.getBook(id));
    this.IncrementaCartService.setBookList(this.booklist);
  }

  openSnackBar(message: string = "Livro adicionado ao carrinho" , action: string = "Fechar") {
    this.snackbar.open(message, action, {
      duration: 2500,
    });
  }

}
