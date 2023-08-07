import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiURL ='http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getCountryList():Observable<any[]>{
    return this.http.get<any>(this.apiURL+'country');
  }

  getStateList(countryId:number):Observable<any[]>{
    return this.http.get<any>(this.apiURL+'getStates/'+countryId);
  }

  getCityList(stateId:number):Observable<any[]>{
    return this.http.get<any>(this.apiURL+'getCities/'+stateId)
  }
}
