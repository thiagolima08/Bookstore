import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncrementaCartService {

  itens = new Subject<number>();

  number:number=0;
  booklist=[];

  setItens(){
    this.itens.next(this.number+=1);
  }

  getItens(){
    return this.itens.asObservable();
  }

  decrementaItens(number){
    this.itens.next(this.number=number)
  }

  setBookList(booklist){
    this.booklist = booklist;
  }

  getBookList(){
    return this.booklist;
  }


  constructor() { }
}
