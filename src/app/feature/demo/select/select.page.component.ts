import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IOption } from 'ngx-youi'
import { SelectSample } from './select.page.sample';

@Component({
  selector: 'youi-select-page',
  templateUrl: './select.page.component.html',
  styleUrls: ['./select.page.component.scss']
})
export class SelectPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(SelectSample))

  options: IOption<number>[] = [
    { label: 'test', value: 0 },
    { label: 'test2', value: 1 },
  ]

  ngModelBinding = 0

  constructor(private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }
}
