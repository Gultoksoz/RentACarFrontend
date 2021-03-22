import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = { id: 1, brandId: 1, colorId: 2, description: "ford focus", modelYear: 2015, dailyPrice: 450000 }
  car2 = { id: 2, brandId: 5, colorId: 3, description: "toyota", modelYear: 2015, dailyPrice: 450000 }
  car3 = { id: 3, brandId: 2, colorId: 2, description: "mercedes-benz", modelYear: 2015, dailyPrice: 450000 }

  cars = [this.car1, this.car2, this.car3,];

  constructor() { }

  ngOnInit(): void {
  }

}
