import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() blogObj;

  constructor() { }

  ngOnInit() {
    console.log(this.blogObj)
  }

}
