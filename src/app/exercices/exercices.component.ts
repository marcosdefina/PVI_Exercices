import { Component, OnInit } from '@angular/core';
import { load } from '@angular/core/src/render3';
import { Location} from '@angular/common';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})

export class ExercicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

export class Template1 implements Template1{

  constructor(

    private location: Location
  ){}

  ngOnInit(){
    this.location.go('/exercices/HTML/Ex1/Template1.html')
  }

}