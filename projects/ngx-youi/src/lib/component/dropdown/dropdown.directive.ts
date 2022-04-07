import { ConnectedPosition, Overlay, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DropdownComponent } from "./dropdown.component";

@Directive({
  selector: '[youi-dropdown-trigger]'
})

export class DropdownDirective implements AfterViewInit, OnDestroy {
  @Input() targetDropdown: DropdownComponent
  @Input() trigger: 'leftClick' = 'leftClick'
  @Input() position: 'leftBottom' | 'rightBottom' | 'leftTop' | 'rightTop' | 'right' | 'end' = 'leftBottom'
  @Input() contextMode: boolean = false
  
  isVisible$ = new BehaviorSubject<boolean>(false)
  private currentEvent: MouseEvent
  private overlayRef: OverlayRef

  constructor(private overlay: Overlay
            , private viewContainerRef: ViewContainerRef
            , private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.subscribeIsVisible()
  }
  
  subscribeIsVisible () {
    this.isVisible$.subscribe((visible) => {
      if (!visible) {
        if (this.overlayRef) {
          this.overlayRef.detach()
          this.overlayRef.dispose()
        }

        return
      }

      this.overlayRef = this.createOverlayRef()

      this.overlayRef.attach(new TemplatePortal(this.targetDropdown.templateRef, this.viewContainerRef))
      this.targetDropdown.triggerSource = this
    })
  }

  private createOverlayRef () {
    const positionStrategy = this.createPositionStrategy()

    const overlayRef = this.overlay.create({
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close()
    })

    // 按下外面的元素之後，關掉 Dropdown
    overlayRef.outsidePointerEvents().subscribe((event) => {
      if (this.elementRef.nativeElement.contains(event.target)) {
        return
      }
      this.isVisible$.next(false)
    })

    return overlayRef
  }

  private createPositionStrategy () {
    let connectedPositionEl: HTMLElement | { x: number, y: number }

    if (this.contextMode) {
      const { x, y } = this.currentEvent
      connectedPositionEl = {
        x,
        y
      }
    } else {
      connectedPositionEl = this.elementRef.nativeElement
    }
    
    const connectedPosition: { [key: string]: ConnectedPosition } = {
      leftBottom: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      },
      rightBottom: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      },
      leftTop: {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      },
      rightTop: {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      },
      right: {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
      },
      left: {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top'
      }
    }

    const positionStrategy = this.overlay.position()
                                          .flexibleConnectedTo(connectedPositionEl)
                                          .withPositions([
                                            connectedPosition[this.position]
                                          ])

    return positionStrategy
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.isVisible$.next(false)
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    // context menu 按下左鍵無須開啟
    if (this.contextMode && !this.isVisible$.getValue()) {
      return
    }

    // 已存在' overlayRef 但已經被移除，將 isVisible 修正為 false
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.isVisible$.next(false)
    }

    this.currentEvent = event
    this.isVisible$.next(!this.isVisible$.getValue())
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    if (!this.contextMode) {
      return
    }
    event.preventDefault()
    this.currentEvent = event

    this.isVisible$.next(false)
    this.isVisible$.next(true)
  }

  ngOnDestroy(): void {
    this.isVisible$.unsubscribe()
  }
}