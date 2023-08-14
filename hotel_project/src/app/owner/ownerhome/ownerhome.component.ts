import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

  loginForm!: FormGroup;
  endPoint!: string;
  ownerData: any;
  forgetPasswordForm!: FormGroup;
  showForgetPasswordForm: boolean = false;
  forgotPassword: boolean = false;
  userName!: string;
  



constructor(private router :Router,private commonService :CommonService,
  private commonApiCallService :CommonApiCallService ,private fb:FormBuilder){}

  ngOnInit() {
    this.endPoint = this.commonService.journey;
    this.forgotPassword = this.commonService.forgotPassword;
    this.userName = this.commonService.userName;
    console.log('endPoint...', this.endPoint);
    this.loginFormDetails();
    
  }
  loginFormDetails() {
    this.loginForm = this.fb.group({
      userName :[],
      password :[]
    })
  }
  forgoPasswordFormDetails() {
    this.forgetPasswordForm = this.fb.group({
      newPassword: [],
      confirmPassword: []
    })
  }
















  login(){


console.log(this.loginForm.value);
this.getOwnerApiData();







}

back(){
  this.router.navigateByUrl('home')
}

getOwnerApiData(){
  this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
    this.ownerData = getOwnerResponse})
console.log('this.ownerData',this.ownerData);
}







}











