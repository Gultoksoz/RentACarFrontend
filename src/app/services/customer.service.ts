import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { CustomerDto } from '../models/customerDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44364/api/customers/";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    let newPath= this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomersDetails(): Observable<ListResponseModel<CustomerDto>> {
    let newPath= this.apiUrl + "getdetails"
    return this.httpClient.get<ListResponseModel<CustomerDto>>(newPath);
  }

}