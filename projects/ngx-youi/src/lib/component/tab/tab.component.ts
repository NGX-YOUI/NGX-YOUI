import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ABSTRACT_INJECT } from '../../model/inject.token';
import { TabPanelDirective } from './tab-panel.directive';

@Component({
  selector: 'youi-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ABSTRACT_INJECT,
      useExisting: TabComponent 
    }
  ]
})
export class TabComponent implements AfterViewInit {
  private _activeTabPanel: string
  @Input() set activeTabPanel(value: string) {
    this._activeTabPanel = value

    const activePandelDirective = this.getTabPanelDirective(this._activeTabPanel)

    this.tabPanelContent.clear()
    this.tabPanelContent.createEmbeddedView(activePandelDirective.templateRef)

    this.activeTabPanelChange.emit(value)
    this.cdr.markForCheck()
  }
  get activeTabPanel () {
    return this._activeTabPanel
  }

  @Input() tabPanelTitleCSSClass: string = ''
  @Input() tabPanelButtonCSSClass: string = ''
  @Input() tabPanelButtonActiveCSSClass: string = ''
  @Input() tabPanelContentCSSClass = ''

  @Output() activeTabPanelChange: EventEmitter<string> = new EventEmitter<string>(true)

  @ViewChild('tabPanelContent', { read: ViewContainerRef }) tabPanelContent: ViewContainerRef
  @ContentChildren(TabPanelDirective) tabPanels: QueryList<TabPanelDirective>

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    if (!this.activeTabPanel && this.tabPanels?.length > 0) {
      const activeTabPanel = this.tabPanels.first.youiTabPanel
      this.activeTabPanel = activeTabPanel
      this.cdr.detectChanges()
    }
  }

  getTabPanelDirective (targetTabPanel: string) {
    if (this.tabPanels.length <= 0) {
      return null
    }

    return this.tabPanels.find(tabPanel => tabPanel.youiTabPanel === targetTabPanel)
  }

  getTabPanelButtonCSS (panelName: string) {
    const activeCSSClass = this.activeTabPanel === panelName ? this.tabPanelButtonActiveCSSClass : ''
    return [this.tabPanelButtonCSSClass, activeCSSClass]
  }
}
