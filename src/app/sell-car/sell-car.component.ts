import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css']
})
export class SellCarComponent implements OnInit {
  customerInfo!: FormGroup;
  carInfo!: FormGroup;

  isLinear = false;

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.customerInfo = new FormGroup({
      customerName: new FormControl('', Validators.required),
      contactno: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      user_id: new FormControl(sessionStorage.getItem('user_id'))
    });

    this.carInfo = new FormGroup({
      modelname: new FormControl('', Validators.required),
      sellingPrice: new FormControl('', Validators.required),
      insurancename: new FormControl('', Validators.required),
      insurancexpdate: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      comments: new FormControl(''),
      images: new FormControl('', Validators.required),
    });
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.carInfo.patchValue({
        images: file
      });
    }
  }

  onSubmit() {
    if (this.customerInfo.valid && this.carInfo.valid) {
      const carFormData = new FormData();
      carFormData.append('modelname', this.carInfo.get('modelname')?.value);
      carFormData.append('sellingPrice', this.carInfo.get('sellingPrice')?.value);
      carFormData.append('insurancename', this.carInfo.get('insurancename')?.value);
      carFormData.append('insurancexpdate', this.carInfo.get('insurancexpdate')?.value);
      carFormData.append('color', this.carInfo.get('color')?.value);
      carFormData.append('purchaseDate', this.carInfo.get('purchaseDate')?.value);
      carFormData.append('comments', this.carInfo.get('comments')?.value);
      carFormData.append('images', this.carInfo.get('images')?.value);
      carFormData.append('customerName', this.customerInfo.get('customerName')?.value);
      carFormData.append('contactno', this.customerInfo.get('contactno')?.value);
      carFormData.append('address', this.customerInfo.get('address')?.value);
      carFormData.append('city', this.customerInfo.get('city')?.value);
      carFormData.append('state', this.customerInfo.get('state')?.value);
      carFormData.append('country', this.customerInfo.get('country')?.value);
      carFormData.append('zipcode', this.customerInfo.get('zipcode')?.value);
      carFormData.append('user_id', this.customerInfo.get('user_id')?.value);

      this.carService.onCreatePostToSellCar(carFormData).subscribe(res => {
        this.toastr.success(res.message);
        this.router.navigate(['/']);
      });
    } else {
      this.toastr.warning('Please enter Valid Data');
      console.log(this.customerInfo.value);
      console.log(this.carInfo.value);
      console.log(this.carInfo.get('images')?.value);
    }
  }

}
