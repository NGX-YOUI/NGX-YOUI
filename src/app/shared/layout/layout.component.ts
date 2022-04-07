import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SiderComponent } from './component/sider/sider.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ContentChild(SiderComponent, { static: false }) sider: SiderComponent
  @ContentChild(SiderComponent, { read: ElementRef, static: false }) siderEl: ElementRef

  @ContentChild(HeaderComponent, { static: false }) header: HeaderComponent
  @ContentChild(HeaderComponent, { read: ElementRef, static: false }) headerEl: ElementRef

  @ContentChild(FooterComponent, { static: false }) footer: FooterComponent
  @ContentChild(FooterComponent, { read: ElementRef, static: false }) footerEl: ElementRef

  firstLoad = true
  constructor() { }

  @HostBinding('class.removeTransition') get removeTransition (){
    return this.firstLoad
  }

  ngOnInit(): void {
    const clearFirstLoad = setTimeout(() => {
      this.firstLoad = false
      clearTimeout(clearFirstLoad)
    }, 500)
  }
}
