import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, forwardRef, HostBinding, HostListener, InjectionToken, Injector, Input, OnInit, QueryList, Self, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IOption } from './IOption';
import { ABSTRACT_INJECT } from '../../model/inject.token';
import { SelectOptionComponent } from './select-option/select-option.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'youi-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent)
    },
    {
      provide: ABSTRACT_INJECT,
      useExisting: SelectComponent 
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements AfterViewInit, ControlValueAccessor {
  private _options: IOption<any>[] = []

  @Input() set options (value: IOption<any>[]) {
    this._options = value
  }
  get options () {
    return this._options
  }
  selectedOption: IOption<any>

  value: any
  onChange: any = (value: any) => {}
  onTouched: any = () => {}
  touched = false
  disabled = false

  isOpenOption: boolean = false
  @ContentChildren(SelectOptionComponent) optionsComponents: QueryList<SelectOptionComponent<any>>

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const clickedInside = this.elmentRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpenOption = false
    }
  }

  @Input() set disableControl( condition : boolean ) {
    this.setDisabledState(condition)
  }

  @Input() bodyCSSClass = ''
  @Input() bodyDisableCSSClass = ''
  @Input() optionsMenuCSSClass = ''
  @Input() optionCSSClass = ''
  @Input() optionActiveCSSClass = ''

  get dynamicBodyCSSClass () {
    const bodyCSSClass = !this.disabled ? this.bodyCSSClass : ''
    const disabledCSSClass = this.disabled ? 'youi-select-body-wrapper--disabled ' + this.bodyDisableCSSClass : ''
    return [bodyCSSClass, disabledCSSClass]
  }

  get attrTabindex () {
    if (!this.disabled) {
      return -1
    }
    return null
  }

  constructor(private elmentRef: ElementRef, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    if (this.optionsComponents?.length > 0) {
      this._options = this.optionsComponents.toArray()
    }
  }

  toggleSelect () {
    if (this.disabled) {
      return
    }
    this.isOpenOption = !this.isOpenOption
    this.elmentRef.nativeElement.focus()
  }

  selectOptionValue (value: any) {
    this.writeValue(value)
  }

  writeValue(value: any): void {
    this.value = value
    this.selectedOption = this._options.find(option => option.value === value)
    this.onChange(value)
    this.isOpenOption = false
    this.cdr.markForCheck()
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched()
      this.touched = true
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}
