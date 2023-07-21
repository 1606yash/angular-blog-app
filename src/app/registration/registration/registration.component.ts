import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegistrationForm!:FormGroup;

  constructor(private userService:UserService,private router: Router, private route: ActivatedRoute, private toastr: ToastrService){}

  ngOnInit(){
    this.userRegistrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      phoneno: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      password: new FormControl('',[Validators.required]),
      cpassword: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    if(this.userRegistrationForm.valid){
      this.userService.onCreateUser(this.userRegistrationForm.value).subscribe(res => {
        this.toastr.success('User registered successfully.');
        this.router.navigate(['login']);
      });
    }else{
      this.toastr.warning('Please enter Valid Data');
    }
    
    console.log(this.userRegistrationForm.value);
  }

}
