import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MenuItemSample } from './menu-item.page.sample';

@Component({
  selector: 'app-menu-item-page',
  templateUrl: './menu-item.page.component.html',
  styleUrls: ['./menu-item.page.component.scss']
})
export class MenuItemPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(MenuItemSample))

  activeItem: string = 'item 1'

  constructor(private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }
}
