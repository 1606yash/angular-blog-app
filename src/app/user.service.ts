import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { NgForm } from '@angular/forms';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiredIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http: HttpClient) { }

  onCreateUser(userData: User){
    
    // send http request

   return this.http.post<any>('http://127.0.0.1:8000/api/user-registration', userData);
  }

  onLoginUser(userData: NgForm){
    this.http.post<AuthResponseData>('http://127.0.0.1:8000/api/login', userData).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
