import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor() { }

  pageslist: []

  ngOnInit() {
  }

  getPages(){
    //think in some way to get pages.html
  }

  fillPage(){
    //think in a way to fill ex1.html with pages.id
  }

}
