import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private builder:FormBuilder) { }
  loginForm:FormGroup;
  submitted:boolean=false;
  emailId:string='';
  password:string='';
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get form(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }else{
      console.log("loginForm", this.loginForm.value)
      if(this.loginForm.value.emailId =='user@gmail.com'){
        this.router.navigate(['user'])
      }else if(this.loginForm.value.emailId =='admin@gmail.com'){
        this.router.navigate(['admin/add'])
      }
    }
  }

}
