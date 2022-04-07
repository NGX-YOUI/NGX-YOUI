import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'youi-expansion-youi-menu-item',
  templateUrl: './expansion-menu-item.component.html',
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({height: '*', visibility: 'visible'})),
      state('collapsed', style({height: '0px', visibility: 'hidden'})),
      transition('expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')),
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExpansionMenuItemComponent implements OnInit, AfterContentInit {
  @Input() preIconName: string | undefined
  @Input() lastIconName: string | undefined
  @Input() lastOpenIconName: string | undefined
  @Input() titleLabel:string

  @Input() insetUnitPx: number = 24
  @Input() headerInsetLevel: number = 0
  @Input() contentInsetLevel: number = 0

  _collapsed: boolean = false
  @Input() set collapsed (value: boolean) {
    this._collapsed = value
    this.collapsedChange.emit(value)
  }
  get collapsed () {
    if (this.disabled) {
      return true
    }

    return this._collapsed
  }

  @Output() collapsedChange = new EventEmitter<boolean>(true)

  @Input() disabled: boolean = false
  @Input() isActive: boolean = false

  @ContentChild ('prepend', {static: false}) prepend: TemplateRef<any>
  @ContentChild ('title', {static: false}) title: TemplateRef<any>
  @ContentChild ('append', {static: false}) append: TemplateRef<any>

  @Input() headerCSSClass: string = ''
  @Input() headerActiveCSSClass: string = ''
  @Input() contentCSSClass: string = ''

  constructor() { }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {}

  public toggleCollapsed () {
    if (this.disabled) {
      return
    }

    this.collapsed = !this.collapsed
  }

  public get headerEventCSS () {
    return [
      this.headerCSSClass,
      this.isActive ? this.headerActiveCSSClass : ''
    ]
  }

  public get headerInsetStyle () {
    if (!this.headerInsetLevel) {
      return null
    }

    let paddingLeft = this.insetUnitPx * this.headerInsetLevel

    return {
      'padding-left': `${paddingLeft}px` 
    }
  }

  public get contentInsetStyle () {
    if (!this.contentInsetLevel) {
      return null
    }

    let paddingLeft = this.insetUnitPx * this.contentInsetLevel

    return {
      'padding-left': `${paddingLeft}px`
    }
  }
}
