import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppServiceService } from '../../app-service.service';
import { IncrementaCartService } from '../../incrementa-cart.service';

@Component({
  selector: 'app-infantojuvenil',
  templateUrl: './infantojuvenil.component.html',
  styleUrls: ['./infantojuvenil.component.css']
})
export class InfantojuvenilComponent implements OnInit {

  books = [];
  booklist = [];

  constructor(private AppServiceService: AppServiceService, private IncrementaCartService: IncrementaCartService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.books = this.AppServiceService.getBooks();
  }

  IncrementaCart(id){
    this.IncrementaCartService.setItens();
    this.booklist = this.IncrementaCartService.getBookList();
    this.booklist.push(this.AppServiceService.getBook(id));
    this.IncrementaCartService.setBookList(this.booklist);
    this.openSnackBar();
  }

  openSnackBar(message: string = "Livro adicionado ao carrinho" , action: string = "Fechar") {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
