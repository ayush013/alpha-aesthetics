import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LocalInteractionService } from '../../services/local-interaction.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogarray: any;

  constructor(private route: ActivatedRoute, private titleService: Title, private LocalInteractionService: LocalInteractionService) {}

  ngOnInit() {
      this.titleService.setTitle(this.route.snapshot.data['title']);
      this.LocalInteractionService.ArrayObservable
        .subscribe(message => {this.blogarray = message;
          console.log(this.blogarray);
        });

  }

}
