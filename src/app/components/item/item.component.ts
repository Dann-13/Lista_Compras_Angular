import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
//Componente que recibe la informacion
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  //Esta es una entrada que hace saber al componente que recivira un objeto en este caso un Item
  @Input() item: Item = new Item();
  //deleteItem va a ser un evento
  @Output()  deleteItem: EventEmitter<Item> = new EventEmitter();
  //deleteItem va a ser un evento
  @Output()  toggleItem: EventEmitter<Item> = new EventEmitter();
  
  constructor(){}
  
  ngOnInit(): void{

  }
  //este es la funcion que usa item.component.html
  onDelete(item: Item){
    this.deleteItem.emit(item);
  }
  onToggle(item : Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }
}
