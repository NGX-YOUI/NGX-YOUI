import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ExpansionMenuItemSample } from './expansion-menu-item.page.sample';

@Component({
  selector: 'app-expansion-menu-item-page',
  templateUrl: './expansion-menu-item.page.component.html',
  styleUrls: ['./expansion-menu-item.page.component.scss']
})
export class ExpansionMenuItemPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(ExpansionMenuItemSample))

  collapsed: boolean = false
  collapsed2: boolean = true

  constructor(private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }

}
