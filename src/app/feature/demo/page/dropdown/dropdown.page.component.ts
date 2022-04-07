import { Component, OnInit } from '@angular/core';
import { DropdownSample } from './dropdown.page.sample';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown.page.component.html',
  styleUrls: ['./dropdown.page.component.scss']
})
export class DropdownPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(DropdownSample))

  constructor() { }

  ngOnInit(): void {
  }

}
