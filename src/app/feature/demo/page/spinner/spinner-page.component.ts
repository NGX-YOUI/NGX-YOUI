import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SpinnerSample } from './spinner.page.sample';

@Component({
  selector: 'youi-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.scss']
})
export class SpinnerPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(SpinnerSample))
  
  isLoading = true

  constructor(private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
