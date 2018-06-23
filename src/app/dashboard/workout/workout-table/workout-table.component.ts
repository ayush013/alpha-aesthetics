import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-table',
  templateUrl: './workout-table.component.html',
  styleUrls: ['./workout-table.component.scss'],
})
export class WorkoutTableComponent implements OnInit {

  workoutObj: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.workoutObj =JSON.parse(this.route.snapshot.queryParams.param);
    console.log(this.workoutObj);

  }
}
