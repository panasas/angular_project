import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs:['userType'],
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) {
   }
   userType:string;

  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigate(['login'])
  }

}
