import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private progressLevel = 0;
  private todo = ['Task 3', 'Task 2', 'Task 1'];
  private inprogress = ['Task 0'];
  private completed = ['Task 123'];
  private done: string[] = [];
  private inputAdd: string = '';
  private inputAddInprogress : string = '';
  private inputAddCompleted : string = '';

  constructor() {

  }
 

  private deleteItem(item,i) {
    item.splice(i, 1);
 
  }

  private checkItemTodo(item,i){
    console.log(item,'42',i,'42',item[i])
    const removTodo = item[i];
    console.log(removTodo,'44',)
    var index = item.indexOf(removTodo);
    console.log(index,'46')
    if (index >= 0) {
      item.splice( index, 1 );
    }
    this.inprogress.push(removTodo)

  }

  private checkItemInprogress(item,i){
    console.log(item,'60',i)
    const removeInprogress = item[i];
    var index = item.indexOf(removeInprogress);
    console.log(index,'46')
    if (index >= 0) {
      item.splice( index, 1 );
    }
    this.completed.push(removeInprogress)

  }

  private addTodo() {
    if (this.inputAdd !== '') {
    this.todo.push(this.inputAdd);
    this.inputAdd = '';
   
    }
  }

  private addInprogress() {
    if (this.inputAddInprogress !== '') {
    this.inprogress.push(this.inputAddInprogress);
    this.inputAddInprogress = '';

    }
  }


  private addCompleted() {
    if (this.inputAddCompleted !== '') {
    this.completed.push(this.inputAddCompleted);
    this.inputAddCompleted = '';

    }
  }

 
  private trackByFn(index: any, item: any) {
   return index;
  } 
}
