import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AppServiceService } from './../app-service.service';
import { IncrementaCartService } from './../incrementa-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private IncrementaCartService: IncrementaCartService, private AppServiceService: AppServiceService, router: Router) {
    this.router = router;
   }

   @ViewChild('search') campoSearch: ElementRef;

  router: Router;
  number:number=0;
  booklist=[];
  total:number=0;
  input:String

  ngOnInit(): void {
    this.IncrementaCartService.itens.subscribe(n => this.number = n);
  }

  bookSearch(){
      this.input = this.campoSearch.nativeElement.value;
      this.AppServiceService.setInput(this.input);
      this.router.navigate(['/search-filter']);
      this.campoSearch.nativeElement.value = "";
  }

  getBookListCart(){
    this.booklist = this.IncrementaCartService.getBookList();
    this.setTotal();
  }

  setTotal(){
    this.total = this.booklist
      .map(b=>b.preco)
      .reduce((total,preco)=> total+=preco);
  }

  deleteItemList(id){
    for(let b of this.booklist){
      if(b.id===id){
      this.booklist.pop();
      }
    };
    if(this.booklist.length===0){
      this.total=0;
    }else{
    this.setTotal();
    };
    this.IncrementaCartService.decrementaItens(this.booklist.length);
  }

}


