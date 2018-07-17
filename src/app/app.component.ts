import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ng-scrollreveal';
import { ServerInteractionService } from './services/server-interaction.service';

@Component({
  selector: 'alpha-aesthetics',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgsRevealConfig] // add NgsRevealConfig to the component providers
})
export class AppComponent implements OnInit {

  constructor(config: NgsRevealConfig, private ServerInteractionService: ServerInteractionService) {
    // customize default values of ng-scrollreveal directives used by this component tree
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.23, 1, 0.32, 1)';
    config.reset = true;
    config.delay = 100;
  }


  ngOnInit() {
    this.ServerInteractionService.isAuthenticated()
    .then(
      (authenticated) => {
        if (authenticated) {
          this.ServerInteractionService.loggedIn = true;
        } else {
          this.ServerInteractionService.loggedIn = false;
        }
      }
    );

  }
}

