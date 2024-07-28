import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  baseUrl='https://freetestapi.com/api/v1/cars';
  constructor(private http:HttpClient) { }
  getAllCars() {
    return this.http.get(`${this.baseUrl}`);
  }
  getCarById(id:number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
