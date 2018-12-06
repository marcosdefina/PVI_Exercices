import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { getBootstrapListener } from '@angular/router/src/router_module';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  pageslist: []

  ngOnInit() {
    var id = this.routeId();
  }

  routeId(){
    const id = +this.route.snapshot.paramMap.get('id');
    return id
  }

  generatePage(id){

  }

  getPages(){
    //think in some way to get pages.html
  }

  fillPage(){
    //think in a way to fill ex1.html with pages.id
  }

}
