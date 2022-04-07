import { Component, EventEmitter, HostBinding, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { BaseMixin } from 'src/app/shared/mixin/BaseMixin';
import { BreakPointService } from 'src/app/shared/service/BreakPointService';
import { LayoutComponent } from '../../layout.component';

@Component({
  selector: 'layout-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SiderComponent extends BaseMixin() {
  @Input() fixed: boolean = false
  @Input() siderWidth: Number
  @Input() autoCollapsed: boolean = true
  @Input() isCollapsed: boolean
  @Output() isCollapsedChange = new EventEmitter<boolean>(true)

  layoutWidth: number

  @HostBinding('class.collapsed') get collpasedCss () {
    return this.isCollapsed
  }

  constructor(private parentLayout: LayoutComponent, public router: Router, private breakPointService: BreakPointService) {
    super()
  }
  
  ngOnInit() {
    this.layoutWidth = window.innerWidth;

    if (!this.autoCollapsed) {
      return
    }

    if (!this.breakPointService.matchBreakPoint('md')) {
      this.setCollapsed(false)
    } else {
      this.setCollapsed(true)
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      takeUntil(this.destoryed$)
    ).subscribe(
      event => {
        if (this.breakPointService.matchBreakPoint('md')) {
          this.setCollapsed(true)
        }
      }
    )
  }

  @HostListener('swipeleft')
  swipeSider () {
    if (!this.layoutBackward) {
      return
    }

    this.setCollapsed(true)
  }

  @HostBinding('class.sider-fixed') get sideFixedCSSClass () {
    if (this.fixed || this.layoutBackward) {
      return true
    } else {
      return false
    }
  }

  @HostBinding('class.sider-backward') get siderBackwardCSSClass () {
    if (this.layoutBackward) {
      return true
    } else {
      return false
    }
  }

  private _paddingTop: string = null
  @HostBinding('style.padding-top') get paddingTop () {
    if (!this.parentLayout.header || !this.parentLayout.header.alwaysLeft || this.breakPointService.matchBreakPoint('md')) {
      this._paddingTop = null
    } else if (this.parentLayout.header.fixed) {
      this._paddingTop = `${this.parentLayout.headerEl.nativeElement.offsetHeight}px`
    } else {
      const scrollTop = document.documentElement.scrollTop
      const paddingTop = this.parentLayout.headerEl.nativeElement.offsetHeight - scrollTop

      this._paddingTop = paddingTop >= 0 ? `${paddingTop}px` : '0px'
    }
    
    return this._paddingTop
  }
  set paddingTop (value: string) {
    this._paddingTop = value
  }

  private _paddingBottom: string = null
  @HostBinding('style.padding-bottom') get paddingBottom () {
    if (!this.parentLayout.footer || !this.parentLayout.footer.alwaysLeft || this.breakPointService.matchBreakPoint('md')) {
      this._paddingBottom = null
    } else {
      this._paddingBottom = `${this.parentLayout.footerEl.nativeElement.offsetHeight}px`
    }
    
    return this._paddingBottom
  }
  set paddingBottom (value: string) {
    this._paddingBottom = value
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: any): void {
    if (this.parentLayout.header || !this.parentLayout.header.fixed || this.parentLayout.header.alwaysLeft || this.breakPointService.matchBreakPoint('lg')) {
      const scrollTop = document.documentElement.scrollTop
      const _paddingTop = this.parentLayout.headerEl.nativeElement.offsetHeight - scrollTop
      this.__paddingTop = _paddingTop >= 0 ? `${_paddingTop}px` : '0px'
    }
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.layoutWidth = (event.target as Window).innerWidth

    if (!this.autoCollapsed) {
      return
    }

    if (this.breakPointService.matchBreakPoint('md') && this.isCollapsed === false) {
      this.setCollapsed(true)
    } else if (!this.breakPointService.matchBreakPoint('md') && this.isCollapsed === true) {
      this.setCollapsed(false)
    }
  }

  setCollapsed (value: boolean) {
    this.isCollapsed = value
    this.isCollapsedChange.emit(value)
  }

  @HostBinding('style.width') 
  get showSiderWidth () {
    if (this.isCollapsed) {
      return '0px'
    } else {
      return `${this.siderWidth}px`
    }
  }

  get layoutBackward (): Boolean {
    if (!this.layoutWidth) {
      return false
    }
    if (this.breakPointService.matchBreakPoint('md') && this.isCollapsed === false) {
      return true
    } else {
      return false
    }
  }
}
