import { Directive, Inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ABSTRACT_INJECT } from '../../model/inject.token';
import type { TabComponent } from './tab.component';

@Directive({
  selector: '[youiTabPanel]'
})
export class TabPanelDirective implements OnInit {
  @Input() youiTabPanel: string
  label: string

  constructor(@Inject(ABSTRACT_INJECT) public parentTab: TabComponent, public templateRef: TemplateRef<any>) {
    
  }
  ngOnInit(): void {
    if (!this.label) {
      this.label = this.youiTabPanel
    }
  }
}
