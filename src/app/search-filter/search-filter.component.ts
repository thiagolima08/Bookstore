import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppServiceService } from '../app-service.service';
import { IncrementaCartService } from './../incrementa-cart.service';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})


export class SearchFilterComponent implements OnInit {

  books=[];
  booklist = [];
  input:String;

  constructor(private AppServiceService: AppServiceService, private IncrementaCartService: IncrementaCartService, private snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.input = this.AppServiceService.getInput().value;
    console.log(this.input)
    this.books = this.AppServiceService.getBooks().filter(b => b.titulo.toLowerCase().includes(this.input.toLowerCase()) || b.autor.toLowerCase().includes(this.input.toLowerCase()))
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
      duration: 2000,
    });
  }

}
