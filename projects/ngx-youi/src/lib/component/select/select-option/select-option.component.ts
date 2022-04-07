import { AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, HostBinding, HostListener, Inject, InjectionToken, Injector, Input, OnInit, Optional, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { IOption } from '../IOption';
import { ABSTRACT_INJECT } from '../../../model/inject.token';
import type { SelectComponent } from '../select.component';

@Component({
  selector: 'youi-select-option',
  templateUrl: './select-option.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SelectOptionComponent<T> implements AfterViewInit, IOption<T> {

  @Input() label: string = ''
  @Input() value: T

  @Input() activeCSSClass = ''

  @ViewChild('childrenEl', { static: false, read: ElementRef }) childrenEl: ElementRef<any>

  @HostBinding('class') get optionCSS () {
    const activeClass = this.selectComponent.value === this.value ? 'select-option--active ' + `${this.selectComponent.optionActiveCSSClass} ${this.activeCSSClass}` : ''
    return [this.selectComponent.optionCSSClass, activeClass].join(' ')
  }

  constructor(@Inject(ABSTRACT_INJECT) private selectComponent: SelectComponent) {}

  ngAfterViewInit(): void {
    if (this.childrenEl.nativeElement.childNodes.length > 0) {
      this.label = this.childrenEl.nativeElement.innerHTML
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.selectComponent.selectOptionValue(this.value)
  }
}
