import { Component, OnInit } from '@angular/core';
import { SpinnerSample } from './spinner.page.sample';

@Component({
  selector: 'youi-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.scss']
})
export class SpinnerPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(SpinnerSample))
  
  isLoading = true

  constructor() { }

  ngOnInit(): void {
  }

}
