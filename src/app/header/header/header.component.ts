import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  userData: any;
  isLoginMode = true;
  token:any;

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService){}

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
    this.token = sessionStorage.getItem('token');

    const tokenPayload = {
      token: this.token
    };

    
    this.userService.onLogoutUser(tokenPayload).subscribe(res =>{
      this.userData = res;
      if(this.userData.success==true){
        sessionStorage.clear();
        this.toastr.success('User Logout successfully.');
        this.isLoginMode = true;
        this.router.navigate(['/login']);
      }else{
        this.toastr.error('Something Went Wrong');
        this.isLoginMode = false;
      }
    }); 
  }
}
