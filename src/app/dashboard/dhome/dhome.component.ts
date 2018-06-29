import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dhome',
  templateUrl: './dhome.component.html',
  styleUrls: ['./dhome.component.scss']
})
export class DhomeComponent implements OnInit {


  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

  

}
