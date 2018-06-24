import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caloriecard',
  templateUrl: './caloriecard.component.html',
  styleUrls: ['./caloriecard.component.scss']
})
export class CaloriecardComponent implements OnInit {

  @Input() calObj;

  calorieTableParam;

  constructor() { }

  ngOnInit() {
    this.calorieTableParam = JSON.stringify(this.calObj);
    console.log(this.calorieTableParam);
  }

}
