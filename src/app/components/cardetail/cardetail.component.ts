import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carDetails: CarDto[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  getCarsDetails(){
    this.carService.getCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
    })
  }


}
