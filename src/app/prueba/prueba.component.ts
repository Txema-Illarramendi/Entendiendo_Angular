import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public bigTxema: string;

  constructor() {
    this.bigTxema="Hola mundo, Txema es el puto amo";
  }

  ngOnInit(): void {
  }

}
