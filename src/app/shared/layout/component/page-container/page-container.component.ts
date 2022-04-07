import { Component, HostBinding, OnInit, ViewContainerRef } from '@angular/core';
import { BreakPointService } from 'src/app/shared/service/BreakPointService';
import { LayoutComponent } from '../../layout.component';

@Component({
  selector: 'layout-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {
  constructor(private parentLayout: LayoutComponent, private breakPointService: BreakPointService) { }

  ngOnInit(): void {}
  
  @HostBinding('style.padding-top') get paddingTop () {
    if (this.parentLayout?.header?.fixed) {
      return `${this.parentLayout.headerEl.nativeElement.offsetHeight}px`
    } else {
      return null
    }
  }

  @HostBinding('style.padding-bottom') get paddingBottom () {
    if (this.parentLayout?.footer?.fixed) {
      return `${this.parentLayout.footerEl.nativeElement.offsetHeight}px`
    } else {
      return null
    }
  }

  @HostBinding('style.padding-left') get rightLayoutMarginLeft() {
    const layoutSider = this.parentLayout.sider
    if (layoutSider && !layoutSider.isCollapsed && !this.breakPointService.matchBreakPoint('md')) {
      return `${layoutSider.siderWidth}px`
    } else {
      return null
    }
  }

  @HostBinding('style.min-height') get containerMinHeight () {
    const headerHeight = this.parentLayout.headerEl?.nativeElement?.offsetHeight ?? 0
    const footerHeight = this.parentLayout.footerEl?.nativeElement?.offsetHeight ?? 0

    return this.parentLayout.header.fixed ? '100vh' : `calc(100vh - ${(headerHeight + footerHeight)}px)`
  }
}
