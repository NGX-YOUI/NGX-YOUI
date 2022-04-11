import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GettingStartSample } from './getting-start.sample';

@Component({
  selector: 'app-getting-start',
  templateUrl: './getting-start.component.html',
  styleUrls: ['./getting-start.component.scss']
})
export class GettingStartComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(GettingStartSample))

  constructor(private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
