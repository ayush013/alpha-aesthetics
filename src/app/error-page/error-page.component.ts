import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title']);
    var scene = document.getElementById('parallax');
    var parallaxInstance = new Parallax(scene);
    var scene2 = document.getElementById('parallaxdoodle');
    var parallaxInstance = new Parallax(scene2);
  }

}
