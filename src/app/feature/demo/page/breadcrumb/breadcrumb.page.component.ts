import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { BreadcrumbSample } from './breadcrumb.page.sample';

@Component({
  selector: 'youi-breadcrumb-page',
  templateUrl: './breadcrumb.page.component.html',
  styleUrls: ['./breadcrumb.page.component.scss'],
})
export class BreadcrumbPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(BreadcrumbSample))
  
  constructor(private hljsLoader: HighlightLoader
    , private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
    this.hljsLoader.setTheme
  }
}
