import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakPointService } from 'src/app/shared/service/BreakPointService';

@Component({
  selector: 'BackendLayout',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss'],
})
export class BackendComponent implements OnInit {
  isCollapsed: boolean
  siderWidth = 256

  constructor(
    public router: Router,
    private breakPointService: BreakPointService
  ) {}

  ngOnInit() {}

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed
  }

  get rightLayoutMarginLeft() {
    if (!this.isCollapsed && !this.breakPointService.matchBreakPoint('md')) {
      return `${this.siderWidth}px`
    } else {
      return null
    }
  }

  routeContainPath (path: string) {
    return this.router.url.indexOf(path) > -1 
  }
}
