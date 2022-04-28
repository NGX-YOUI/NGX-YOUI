import { ContentChild, TemplateRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { ABSTRACT_INJECT } from '../../../model/inject.token';
import type { BreadcrumbComponent } from '../breadcrumb.component';

@Component({
  selector: 'youi-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() icon: string;
  @ContentChild('iconTemplate', { static: false }) iconTemplate: TemplateRef<any>

  constructor(@Inject(ABSTRACT_INJECT) public breadcrumb: BreadcrumbComponent) {}

  ngOnInit(): void {}

  get itemCSSClass () {
    return [
      this.breadcrumb.breadcrumbItems.last === this ? 'youi-breadcrumb-item-content-active ' + this.breadcrumb.itemActiveCSSClass : this.breadcrumb.itemCSSClass
    ]
  }

  get separatorSpace () {
    return {
      margin: `0 ${this.breadcrumb.separatorSpace}`
    }
  }
}
