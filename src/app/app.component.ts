import { Component } from '@angular/core';

@Component({
  selector: 'alpha-aesthetics',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  test(event) {
    console.log(event);
  }
}
