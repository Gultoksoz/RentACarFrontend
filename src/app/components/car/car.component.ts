import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded=false;
  carsDetails: CarDto[] = [];

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarsDetails();
    this.activatedRoute.params.subscribe(params=>{

      if (params["brandId"]) {
      this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars();
      }
    })
  }

  getCars(){
   this.carService.getCars().subscribe((response)=>{
     this.cars=response.data
     this.dataLoaded=true;
   })
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      if (response.success) {
        this.carsDetails = response.data;
      }
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response)=>{
      this.cars=response.data
    })
   }

}
