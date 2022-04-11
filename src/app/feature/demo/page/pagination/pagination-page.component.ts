import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PaginationSample } from './pagination.page.sample';

@Component({
  selector: 'youi-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.scss']
})
export class PaginationPageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(PaginationSample))

  pagination = {
    currentPage: 1
  }

  constructor(private route: ActivatedRoute
    , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }


  rowPerPageChange (page: number) {
    console.log(page)
  }
}
