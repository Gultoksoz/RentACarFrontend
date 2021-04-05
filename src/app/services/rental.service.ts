import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44364/api/rentals/";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath= this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalsDetails(): Observable<ListResponseModel<RentalDetail>>{
    let newPath= this.apiUrl + "getdetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
}