import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workoutcard',
  templateUrl: './workoutcard.component.html',
  styleUrls: ['./workoutcard.component.scss']
})
export class WorkoutcardComponent implements OnInit {

  @Input() workoutObj;

  workoutTableParam;
  constructor() { }

  ngOnInit() {
    this.workoutTableParam = JSON.stringify(this.workoutObj);
    console.log(this.workoutTableParam );
  }

}
