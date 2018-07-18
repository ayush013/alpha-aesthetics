import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Parallax from 'parallax-js';
import * as Typed from 'typed.js';
import { LocalInteractionService } from '../services/local-interaction.service';
import { ServerInteractionService } from '../services/server-interaction.service';

declare var Parallax: any;
declare var fullpage: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  x: any;

  loggedIn = false;

  MoveDown() {
    this.x.moveSectionDown();
  }

  constructor(private route: ActivatedRoute, 
    private titleService: Title, 
    private LocalInteractionService: LocalInteractionService,
    private ServerInteractionService: ServerInteractionService) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title']);

    var scene1 = document.getElementById('parallaxdoodle');
    var parallaxInstance1 = new Parallax(scene1);

    var scene2 = document.getElementById('parallaxicons');
    var parallaxInstance2 = new Parallax(scene2);

    var scene3 = document.getElementById('parallaxmodel');
    var parallaxInstance3 = new Parallax(scene3);

    var scene4 = document.getElementById('parallaxdiet');
    var parallaxInstance4 = new Parallax(scene4);

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
   this.x = new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollBar: true,
        scrollingSpeed: 300,
        afterLoad: (origin, destination, direction) => {
          this.LocalInteractionService.LinkChange.next(destination.index); 
           
        }
      });

          
      this.LocalInteractionService.MoveTo.subscribe( (value) => {
        this.x.moveTo(value);
      });

      this.ServerInteractionService.LoginStatus
      .subscribe( loginstatus => {this.loggedIn = loginstatus;
        console.log(loginstatus);
      });
    
    }

  ngOnDestroy() {
    this.x.destroy();
  }
}
