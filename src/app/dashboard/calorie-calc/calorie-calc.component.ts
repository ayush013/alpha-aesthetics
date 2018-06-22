import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calorie-calc',
  templateUrl: './calorie-calc.component.html',
  styleUrls: ['./calorie-calc.component.scss']
})
export class CalorieCalcComponent implements OnInit {

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
