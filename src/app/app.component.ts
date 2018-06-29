import { Component } from '@angular/core';
import {NgsRevealConfig} from 'ng-scrollreveal';

@Component({
  selector: 'alpha-aesthetics',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgsRevealConfig] // add NgsRevealConfig to the component providers
})
export class AppComponent {

  constructor(config: NgsRevealConfig) {
    // customize default values of ng-scrollreveal directives used by this component tree
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.23, 1, 0.32, 1)';
    config.reset = true;
    config.delay = 100;
  }
}
