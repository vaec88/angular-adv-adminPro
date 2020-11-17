import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {

  title1 = 'Ventas';
  label1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1: [number[]] = [[100, 200, 300]];

  title2 = 'Compras';
  label2: string[] = ['Download Shopping', 'In-Store Shopping', 'Mail-Order Shopping'];
  data2: [number[]] = [[500, 120, 300]];

  title3 = 'Pérdidas';
  label3: string[] = ['Download Losses', 'In-Store Losses', 'Mail-Order Losses'];
  data3: [number[]] = [[250, 150, 300]];

  title4 = 'Ganancias';
  label4: string[] = ['Download Earnings', 'In-Store Earnings', 'Mail-Order Earnings'];
  data4: [number[]] = [[650, 150, 200]];

  constructor() { }

  ngOnInit() {
  }

}
