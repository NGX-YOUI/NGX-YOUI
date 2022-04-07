import { Component, HostBinding, Input, OnInit, ViewContainerRef } from '@angular/core';
import { BreakPointService } from 'src/app/shared/service/BreakPointService';
import { LayoutComponent } from '../../layout.component';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() fixed: boolean = false
  @Input() alwaysLeft: boolean = false

  constructor(private parentLayout: LayoutComponent, private breakPointService: BreakPointService) { }

  ngOnInit(): void {

  }
  
  @HostBinding('class.header-fixed') get headerFixed () {
    return this.fixed
  }

  @HostBinding('style.margin-left') get rightLayoutMarginLeft() {
    if (this.alwaysLeft || !this.parentLayout.sider) {
      return null
    }

    const layoutSider = this.parentLayout.sider
    if (!layoutSider.isCollapsed && !this.breakPointService.matchBreakPoint('md')) {
      return `${layoutSider.siderWidth}px`
    } else {
      return null
    }
  }
}
