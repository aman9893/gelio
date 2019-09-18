import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: boolean= false;
  mobileMenu: boolean = false;

  constructor() { }
  public innerWidth: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      console.log(this.innerWidth )
      if( this.innerWidth <= 768){
       this.mobileMenu= true;
      }
  }
  toggleState() { // click handler
    this.show = !this.show;

  }
}
