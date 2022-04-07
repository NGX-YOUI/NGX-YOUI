import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, Optional, SkipSelf, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Component({
  selector: 'youi-dropdown-menu',
  templateUrl: './dropdown.component.html',
  exportAs: 'youiDropdownMenu',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  @Input() dropdownCSSClass: string = ''
  triggerSource: DropdownDirective

  @ViewChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>

  constructor(@SkipSelf() @Optional() public parentDropdown: DropdownComponent) { }
}
