import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BreakPointService } from 'src/app/shared/service/BreakPointService';
import { LayoutComponent } from '../../layout.component';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() fixed: boolean = false
  @Input() alwaysLeft: boolean = false

  constructor(private parentLayout: LayoutComponent, private breakPointService: BreakPointService) { }

  ngOnInit(): void {

  }
  
  @HostBinding('class.footer-fixed') get footerFixed () {
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
