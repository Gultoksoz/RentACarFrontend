import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44364/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath= this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsDetails(): Observable<ListResponseModel<CarDto>>{
    let newPath= this.apiUrl + "cars/getdetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath= this.apiUrl + "cars/getbybrandid?id=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
