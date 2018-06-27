import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  benefits = ['Enhance Mood','Reduce Stress','Become Sexy','Get Stronger','Improve Heart Health','Become Confident'];

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
