import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id == 1)
      window.location.href = 'file:///home/ubuntu/ProgInternet-Odemir-7600068-2018201-IFSC/src/app/exercices/HTML/Ex2/MarkUps-Rex/Rex/index.html'
    else
      window.location.href = 'file:///home/ubuntu/ProgInternet-Odemir-7600068-2018201-IFSC/src/app/exercices/HTML/Ex2/academic-education/index.html'
    }

}
