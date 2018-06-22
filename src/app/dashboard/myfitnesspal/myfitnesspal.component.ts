import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myfitnesspal',
  templateUrl: './myfitnesspal.component.html',
  styleUrls: ['./myfitnesspal.component.scss']
})
export class MyfitnesspalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
