import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44364/api/carImages/getall";
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
  }
}