import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DatatableTemplateDirective } from './datatable.directive';
import { ITable, ITableColumn, ITableSelected } from "./ITable";

@Component({
  selector: 'youi-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent<T> implements ITable<T>, OnInit {
  @Input() tableCSSClass: string = ''
  @Input() rowCSSClassFn: Function = (rowData: T) => {}
  @Input() rowSelectDisableFn: Function = (rowData: T): true | null => {
    return null
  }

  @Input() columns: ITableColumn[]

  private _tableData: T[]
  @Input() set tableData (value: T[]) {
    for (let selectItem of this.selectedList) {
      if (!value.includes(selectItem)) {
        this.selectedList.delete(selectItem)
      }
    }
    this._tableData = value
  }

  get tableData () {
    return this._tableData
  }
  
  /**
   * setecedMode 僅限於沒有任何 headerTemplate 跟 bodyTemplate
   */
  @Input() selectedMode: 'checkbox' | 'radio' | '' = ''

  @Input() selectedList: Set<T> = new Set<T>();
  @Output() selectedListChange: EventEmitter<Set<T>> = new EventEmitter<Set<T>>(true)
  @Output() selectedChange: EventEmitter<ITableSelected<T>> = new EventEmitter<ITableSelected<T>>(true)

  @ContentChildren(DatatableTemplateDirective) columnTemplateDirectives: QueryList<DatatableTemplateDirective>
  
  constructor() { }

  ngOnInit(): void {
  }

  public getTableTemplate (name: string, type: 'header' | 'body' | '' = '') {
    const templateName = type ? `${type}-${name}` : name
    return (this.columnTemplateDirectives
      .find(templateDirective => templateDirective.name === templateName))
  }

  getDataByField (data: T, fieldName: string) {
    return (data as any)[fieldName] ?? ''
  }

  toggleSelectedData (data: T) {
    let checked

    if (!this.selectedList.has(data)) {
      checked = true

      if (this.selectedMode === 'radio') {
        this.selectedList = new Set()
      }
      this.selectedList.add(data)
    } else {
      checked = false

      this.selectedList.delete(data)
    }

    this.selectedListChange.emit(this.selectedList)

    this.selectedChange.emit({
      targetData: data,
      isSelected: checked,
      allSelectedData: this.selectedList
    })
  }
  
  toggleAllSelected (event: Event) {
    const checked = (<HTMLInputElement>event.target).checked

    if (checked) {
      this.selectedList = new Set(this.tableData)
    } else {
      this.selectedList = new Set()
    }
    
    this.selectedListChange.emit(this.selectedList)

    this.selectedChange.emit({
      targetData: null,
      isSelected: checked,
      allSelectedData: this.selectedList
    })
  }
}
