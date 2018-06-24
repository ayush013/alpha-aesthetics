import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caloriearticle',
  templateUrl: './caloriearticle.component.html',
  styleUrls: ['./caloriearticle.component.scss']
})
export class CaloriearticleComponent implements OnInit {

  calObj;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams.param);
    this.calObj = JSON.parse(this.route.snapshot.queryParams.param);
    console.log(this.calObj);

  }

}
