import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

// interface AuthResponseData {
//   kind: string;
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiredIn: string;
//   localId: string;
// }

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http: HttpClient) { }

  onCreateUser(userData: User){    
    // send http request
   return this.http.post<any>('http://127.0.0.1:8000/api/user-registration', userData);
  }

  onLoginUser(userData: any){
   return this.http.post<any>('http://127.0.0.1:8000/api/login', userData);
  }

  isLoggedIn(){
    return sessionStorage.getItem('token')!= null?sessionStorage.getItem('token')?.toString():'';
  }

  onLogoutUser(token:any){
    return this.http.post<any>('http://127.0.0.1:8000/api/logout',token);
  }
  
}
