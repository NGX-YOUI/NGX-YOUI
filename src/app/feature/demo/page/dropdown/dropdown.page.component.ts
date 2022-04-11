import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DropdownSample } from './dropdown.page.sample';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown.page.component.html',
  styleUrls: ['./dropdown.page.component.scss']
})
export class DropdownPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(DropdownSample))

  constructor(private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
