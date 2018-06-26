import { Component, OnInit, Input } from '@angular/core';
import { CalorieCalculatorService } from '../../../services/calorie-calculator.service';

@Component({
  selector: 'app-caloriecard',
  templateUrl: './caloriecard.component.html',
  styleUrls: ['./caloriecard.component.scss']
})
export class CaloriecardComponent implements OnInit {

  @Input() calObj;

  calorieTableParam;

  constructor(private cal: CalorieCalculatorService) { }

  ngOnInit() {
    this.calorieTableParam = JSON.stringify(this.calObj);
    console.log(this.calorieTableParam);
  }

  test() {
    this.cal.Bulking();
  }

}
