import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-floatbutton',
  templateUrl: './floatbutton.component.html',
  styleUrls: ['./floatbutton.component.scss']
})
export class FloatbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.action-button').on('click', function(){
      $(this).toggleClass('active');
    })
  }

}
