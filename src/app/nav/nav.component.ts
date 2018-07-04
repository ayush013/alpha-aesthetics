import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LocalInteractionService } from '../services/local-interaction.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  previousUrl: string = 'home';

  activelink;
  home: boolean = true;

  menu = false;

  MoveTo(value) {
    this.LocalInteractionService.MoveTo.next(value);
  }

  ShowMenu() {
    this.menu = !this.menu;
  }

  constructor(private renderer: Renderer2, private router: Router, private LocalInteractionService: LocalInteractionService) {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.addClass(document.getElementById('navbar'), 'home');
          this.renderer.addClass(document.getElementById('navbar'), 'navpadding');
          this.home = true;
        }
        let currentUrlSlug = event.url.slice(1)
        if (currentUrlSlug) {
          this.renderer.removeClass(document.getElementById('navbar'), 'home');
          this.renderer.removeClass(document.getElementById('navbar'), 'navpadding');
          this.home = false;
        }
        this.previousUrl = currentUrlSlug;
      }
    });
   }

  ngOnInit() {
    this.LocalInteractionService.LinkChange.subscribe((value) => {
      this.activelink = value;
      console.log(this.activelink)
     });
  }

}
