import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ABSTRACT_INJECT } from '../../model/inject.token';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'youi-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ABSTRACT_INJECT,
      useExisting: BreadcrumbComponent 
    }
  ]
})
export class BreadcrumbComponent implements OnInit { 
 @Input() separator: string = '/'
 @Input() separatorType: 'text' | 'icon' = 'text'
 @Input() separatorSpace: string = '10px'

 @ContentChild('separatorTemp', { static: false }) separatorTemp: TemplateRef<any>
 @ContentChildren(BreadcrumbItemComponent) breadcrumbItems: QueryList<BreadcrumbItemComponent>
 
 @Input() iconCSSClass: string = '';
 @Input() itemCSSClass: string = ''
 @Input() itemActiveCSSClass: string = ''
 @Input() speratorCSSClass: string = ''

  constructor() { }

  ngOnInit(): void {
  }
}
