import { Component, OnInit } from '@angular/core';
import { CalorieCalculatorService } from '../../../services/calorie-calculator.service';
import { CalorieData } from '../../../services/local-interaction.service';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {

  constructor(private CalorieService: CalorieCalculatorService) { }

  caldata: CalorieData = {};

  isCollapsed = true;


  ngOnInit() {
    this.caldata = this.CalorieService.Maintenance();
    console.log(this.caldata);
  }

}
