import { Component, Input, OnInit } from '@angular/core';
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

  constructor(){}
  
  ngOnInit(): void{

  }
}
