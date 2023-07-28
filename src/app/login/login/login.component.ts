import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: any;
  authForm!: FormGroup;
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    sessionStorage.clear();
   }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.userService.onLoginUser(this.authForm.value).subscribe(res => {
        this.userData = res;
       // console.log(this.userData);
        if (this.userData.success === true) {
          sessionStorage.setItem('token', this.userData.data.token);
          sessionStorage.setItem('user_id', this.userData.data.userId);
          this.isLoggedIn = true;
          this.toastr.success('User Login successfully.');
          this.router.navigate(['/sell-car']);
        }else{
          this.toastr.error('Please enter Valid Data');
          this.isLoggedIn = false;
        }
      });
    } else {
      this.toastr.warning('Please enter Valid Data');
      this.isLoggedIn = false;
    }
  }
}
