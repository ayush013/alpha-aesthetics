import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
