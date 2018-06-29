import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  previousUrl: string = 'home';

  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.addClass(document.getElementById('navbar'), 'home');
        }
        let currentUrlSlug = event.url.slice(1)
        console.log(currentUrlSlug)
        if (currentUrlSlug) {
          this.renderer.removeClass(document.getElementById('navbar'), 'home');
        }
        this.previousUrl = currentUrlSlug;
      }
    });
   }

  ngOnInit() {
  }

}
