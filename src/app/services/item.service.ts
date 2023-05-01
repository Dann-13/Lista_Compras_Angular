import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [
    {
      id: 0,
      title: "Manzana",
      price: 1000,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: "Pera",
      price: 2000,
      quantity: 4,
      completed: true
    },
    {
      id: 2,
      title: "Camisa",
      price: 2000,
      quantity: 4,
      completed: true
    }
  ];

  constructor() { }
  getItems(){
    return this.items;
  }
  addItem(item:Item){
    this.items.unshift(item);
    
  }
}
