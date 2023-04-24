import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item"

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  items: Item[] = [];
  total: number = 0;
  constructor(){}
  ngOnInit(): void {
    this.items = [
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
    this.getTotal();
  }
  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id !== item.id);
    this.getTotal();
  }
  toggleItem(item:Item){
    this.getTotal();
  }
  getTotal(){
    this.total = this.items
                  .filter(x => !x.completed)
                  .map(item => item.quantity * item.price)
                  .reduce((acumulador, item) => acumulador += item, 0);
  }

}

