import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  blogObj: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.blogObj =this.route.snapshot.queryParams;
  }

}
