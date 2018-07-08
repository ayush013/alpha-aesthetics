import { Component, OnInit } from '@angular/core';
import { CalorieCalculatorService } from '../../../services/calorie-calculator.service';
import { CalorieData } from '../../../services/local-interaction.service';

@Component({
  selector: 'app-bulking',
  templateUrl: './bulking.component.html',
  styleUrls: ['./bulking.component.scss']
})
export class BulkingComponent implements OnInit {

  constructor(private CalorieService: CalorieCalculatorService) { }

  caldata: CalorieData = {};

  isCollapsed = true;

  ngOnInit() {
    this.caldata = this.CalorieService.Bulking();
    console.log(this.caldata);
  }

}
