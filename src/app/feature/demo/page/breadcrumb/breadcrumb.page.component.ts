import { Component, OnInit } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';
import { BreadcrumbSample } from './breadcrumb.page.sample';

@Component({
  selector: 'youi-breadcrumb-page',
  templateUrl: './breadcrumb.page.component.html',
  styleUrls: ['./breadcrumb.page.component.scss'],
})
export class BreadcrumbPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(BreadcrumbSample))
  
  constructor(private hljsLoader: HighlightLoader) { }

  ngOnInit(): void {
    this.hljsLoader.setTheme
  }
}
