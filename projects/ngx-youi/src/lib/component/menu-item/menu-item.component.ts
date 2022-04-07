import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'youi-menu-item',
  templateUrl: './menu-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent implements AfterViewInit {
  @Input() preIconName: string | undefined
  @Input() lastIconName: string | undefined
  @Input() titleLabel:string
  
  @Input() insetLevel: number = 0
  @Input() insetUnitPx: number = 24

  @Input() disabled: boolean = false
  @Input() isActive: boolean = false

  @ViewChild('titleEl', { static: false }) titleEl: ElementRef<any>
  @ContentChild ('prepend', {static: false}) prepend: TemplateRef<any>
  @ContentChild ('append', {static: false}) append: TemplateRef<any>

  @Input() cssClass: string = ''
  @Input() activeCSSClass: string = ''

  constructor() { }

  ngAfterViewInit(): void {
  }

  public get eventCSS () {
    return [
      this.cssClass,
      this.isActive ? this.activeCSSClass : ''
    ]
  }

  public get insetStyle () {
    if (!this.insetLevel) {
      return null
    }

    let paddingLeft = this.insetUnitPx * this.insetLevel

    return {
      'padding-left': `${paddingLeft}px` 
    }
  }

  /**
   * 避免因冒泡事件，導致 Disable 的時候觸發 RouterLink
   * @param event 
   */
  disabledRouterLink (event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault()
      event.stopPropagation()
    }
  }
}
