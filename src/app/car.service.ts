import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  onCreatePostToSellCar(carInfo:FormData){
    return this.http.post<any>('http://127.0.0.1:8000/api/create-post',carInfo);
  }
}
