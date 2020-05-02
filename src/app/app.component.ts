import { Component, ViewChild, ElementRef, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AppServiceService } from './app-service.service';
import { IncrementaCartService } from './incrementa-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore';

  destruir: boolean = false;

  @Output() inputPai:String;

  @ViewChild('search') campoSearch: ElementRef;

  router: Router;
  number:number=0;
  booklist=[];
  total:number=0;
  history=[];

  constructor(private IncrementaCartService: IncrementaCartService, router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    this.IncrementaCartService.itens.subscribe(n => this.number = n);
  }

  destroy(){
    this.destruir = true;
  }

  rebirth(){
    this.destruir = false;
  }

  bookSearch(){
    this.inputPai = this.campoSearch.nativeElement.value;
    this.history.push(this.inputPai);
    if(this.history.length > 2){
      this.history.shift()
    }
    if((this.inputPai) && (this.inputPai != this.history[this.history.length-2])){
      this.router.navigate(['/search-filter']);
      this.campoSearch.nativeElement.value = "";
      this.rebirth();
    }
  }

  getBookListCart(){
    this.booklist = this.IncrementaCartService.getBookList();
    if(this.booklist.length!=0){
      this.setTotal();
    };
  }

  setTotal(){
    this.total = this.booklist
      .map(b=>b.preco)
      .reduce((total,preco) => total+=preco);
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
