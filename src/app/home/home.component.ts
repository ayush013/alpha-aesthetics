import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Parallax from 'parallax-js';
import * as Typed from 'typed.js';

declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  benefits = ['Enhance Mood','Reduce Stress','Become Sexy','Get Stronger','Improve Heart Health','Become Confident'];

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title']);
    var scene1 = document.getElementById('parallaxdoodle');
    var parallaxInstance1 = new Parallax(scene1);
    var scene2 = document.getElementById('parallaxicons');
    var parallaxInstance2 = new Parallax(scene2);
    var scene3 = document.getElementById('parallaxmodel');
    var parallaxInstance3 = new Parallax(scene3);

    var typed = new Typed("#landingquotes", {
      strings: [
        "One religion - Fitness!", 
        "Strong is the new Sexy!",
        "Be Stronger than your excuses!",
        "Your only limit is you!",
        "Excuses dont burn calories!"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 5000,
      loop: true,
      showCursor: false
  });

  }
  

}
