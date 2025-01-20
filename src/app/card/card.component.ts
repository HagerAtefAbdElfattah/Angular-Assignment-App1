import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  imageUrl:string[]=[
    '/img/poert1.png',
    '/img/port2.png',
    '/img/port3.png',
    '/img/port2.png',
    '/img/poert1.png',
    '/img/port3.png'
  ]

  displayModal: boolean = true
  modalIndex!: number 
  modalImg!: string 

  modal(index:number, img:string){
    this.displayModal = false
    this.modalIndex = index
    this.modalImg = img
  }
  
}
