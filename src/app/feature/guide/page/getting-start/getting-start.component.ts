import { Component, OnInit } from '@angular/core';
import { GettingStartSample } from './getting-start.sample';

@Component({
  selector: 'app-getting-start',
  templateUrl: './getting-start.component.html',
  styleUrls: ['./getting-start.component.scss']
})
export class GettingStartComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(GettingStartSample))

  constructor() { }

  ngOnInit(): void {
  }

}
