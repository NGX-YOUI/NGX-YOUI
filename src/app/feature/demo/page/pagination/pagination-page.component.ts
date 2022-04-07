import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }


  rowPerPageChange (page: number) {
    console.log(page)
  }
}
