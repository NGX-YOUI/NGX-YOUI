import { Directive, ElementRef, Host, HostBinding, HostListener, OnInit, Optional, Renderer2, SkipSelf } from "@angular/core";
import { DropdownComponent } from "./dropdown.component";

@Directive({
  selector: '[youi-dropdown-item]'
})

export class DropdownItemDirective implements OnInit {
  constructor(private dropDown: DropdownComponent) {
    
  }
  ngOnInit(): void {
  }

  @HostListener('click') 
  onClick () {
    this.dropDown.triggerSource.isVisible$.next(false)

    let parent = this.dropDown.parentDropdown
    while (parent) {
      parent.triggerSource.isVisible$.next(false)
      parent = parent.parentDropdown
    }
  }
}