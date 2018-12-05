import { Component, OnInit } from '@angular/core';
import { load } from '@angular/core/src/render3';
import { Location} from '@angular/common';

@Component({
    selector: 'app-template1',
    templateUrl: './Template1.html',
    styleUrls: ['./Template1.component.css']
})

export class Template1 implements OnInit{

    constructor(
      private location: Location
    ){}

    ngOnInit(){
    }

}