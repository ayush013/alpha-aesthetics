import { Component, OnInit } from '@angular/core';
import { CalorieCalculatorService } from '../../../services/calorie-calculator.service';

@Component({
  selector: 'app-fatloss',
  templateUrl: './fatloss.component.html',
  styleUrls: ['./fatloss.component.scss']
})
export class FatlossComponent implements OnInit {

  constructor(private CalorieService: CalorieCalculatorService) { }

  caldata = {};

  ngOnInit() {
    this.caldata = this.CalorieService.FatLoss();
    console.log(this.caldata);
  }

}
