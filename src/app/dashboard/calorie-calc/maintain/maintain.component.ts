import { Component, OnInit } from '@angular/core';
import { CalorieCalculatorService } from '../../../services/calorie-calculator.service';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {

  constructor(private CalorieService: CalorieCalculatorService) { }

  caldata = {};

  ngOnInit() {
    this.caldata = this.CalorieService.Maintenance();
    console.log(this.caldata);
  }

}
