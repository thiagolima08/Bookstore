import { AppServiceService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IncrementaCartService } from './../incrementa-cart.service';

@Component({
  selector: 'app-booksell',
  templateUrl: './booksell.component.html',
  styleUrls: ['./booksell.component.css']
})
export class BooksellComponent implements OnInit {
  books = [];
  id:String;
  booklist = [];

  constructor(private AppServiceService:AppServiceService,private route: ActivatedRoute, private IncrementaCartService: IncrementaCartService,private snackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.books = this.AppServiceService.getBooks();
    this.id = this.route.snapshot.params['id'];
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
