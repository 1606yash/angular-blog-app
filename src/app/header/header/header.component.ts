import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLoginMode = true;

  constructor(private router: Router){}

  ngOnInit(){
    this.isLoginMode=this.checkSession();
  }

  checkSession():boolean{
    if(!!(sessionStorage.getItem('token')) && !!(sessionStorage.getItem('user_id'))){
      this.isLoginMode = false;
    }else{
      this.isLoginMode = true;
    }
    //console.log(this.isLoginMode);
    return this.isLoginMode;
  }

  Logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
