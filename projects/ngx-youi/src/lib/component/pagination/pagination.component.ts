import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IPage } from './IPage';

@Component({
  selector: 'youi-pagination',
  templateUrl: './pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @ContentChild ('first', {static: false}) first: any
  @ContentChild ('previous', {static: false}) previous: any

  @ContentChild ('number', {static: false}) number: any
  
  @ContentChild ('next', {static: false}) next: any
  @ContentChild ('last', {static: false}) last: any

  @Input() buttonCSSClass: string = ""
  @Input() arrowCSSClass: string = ""
  @Input() numberCSSClass: string = ""
  @Input() activeNumberCSSClass: string = ""
  @Input() rowPerPageSelectCSSClass: string = ""

  /**
   * 目前頁數
   */
  @Input() currentPage: number = 1
  @Output() currentPageChange = new EventEmitter<number>(true)

  /**
   * 一頁有幾筆，預設 0 代表不做分頁
   */
  private _rowPerPage = 10
  @Input() set rowPerPage (value: number) {
    this._rowPerPage = value
    this.rowPerPageChange.emit(value)
  }
  
  get rowPerPage () {
    return this._rowPerPage  
  }

  @Output() rowPerPageChange = new EventEmitter<number>(true)
  
  /**
   * 總筆數，用來計算總頁數
   */
  @Input() totalRowsCount: number = 0

  /**
   * 自訂義總頁數，強制覆蓋計算的頁數
   * 預設小於 0，自動計算頁數
   */
  @Input() maxPages: number = -1
  public get totalPages () {
    if (this.maxPages >= 0) {
      return this.maxPages
    }

    if (this.rowPerPage === 0) {
      return 1
    }
    
    return Math.ceil(this.totalRowsCount / this.rowPerPage)
  }

  /**
   * 最多顯示幾頁，Boundary
   */
  private _maxDsiplayPages: number = 0
  @Input() set maxDsiplayPages (value: number) {
    if (value < 0) {
      throw new Error('maxDsiplayPages must bigger equal than 1')
    }
    this._maxDsiplayPages = value
  }
  get maxDsiplayPages () {
    return this._maxDsiplayPages
  }

  /**
   * 每頁幾筆的下拉清單選項，0 代表全部
   */
  private _rowPerPageOptions: number[] = [10, 20, 30, 40, 0]
  @Input() set rowPerPageOptions (options: number[]) {
    this._rowPerPageOptions = options
  }
  get rowPerPageOptions () {
    if (!this._rowPerPageOptions.includes(this.rowPerPage)) {
      this._rowPerPageOptions.unshift(this.rowPerPage)
    }

    return this._rowPerPageOptions
  }

  /**
   * 顯示第一頁與最後一夜按鈕 
   * true: 顯示 icon button，頁碼不顯示頭尾
   * false: 不顯示 icon button，頁碼顯示頭尾
   */
  @Input() showFirstLastIconButton: boolean = true

  /**
   * 是否顯示每頁幾筆
   */
  @Input() showRowPerPageSelect: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public get previousPage () {
    const previousPage = this.currentPage - 1
    return previousPage >= 1  ? previousPage : null
  }

  public get nextPage () {
    const nextPage = this.currentPage + 1
    return nextPage <= this.totalPages  ? nextPage : null
  }

  public setCurrentPage(page: number) {
    if (page < 1 && page > this.totalPages) {
      return
    }
    this.currentPage = page
    this.currentPageChange.emit(page)
  }

  /**
   * 取得所有分頁
   * 模式一: 全部顯示
   * 模式二: 左邊全部顯示，右邊顯示 數字 + Boundary
   * 模式三: 左邊顯示 數字 + Boundary，右邊全部顯示
   * 模式四：左右皆為 Boundary + 數字
   */
  public get showPages (): IPage[] {
    const pages: IPage[] = []

    // 顯示全部的分頁
    if (this.maxDsiplayPages === 0 || this.maxDsiplayPages >= this.totalPages) {
      for (let page = 1; page <= this.totalPages; page++) {
        pages.push({
          label: `${page}`,
          value: page
        })
      }
      return pages
    }
    
    const middleNumber = Math.floor(this.maxDsiplayPages / 2)
    const leftRange = 1 + middleNumber + 1
    const rightRange = this.totalPages - middleNumber - 1
    let boundaryShowNumber = Math.floor((this.maxDsiplayPages - 1) / 2) - 1
    if (boundaryShowNumber <= 0) {
      boundaryShowNumber = 1
    } else if (this.showFirstLastIconButton) {
      boundaryShowNumber ++
    }

    if (this.currentPage < leftRange) { // 顯示全部的左半邊數字
      for (let page = 1; page <= this.maxDsiplayPages; page++) {
        pages.push({
          label: `${page}`,
          value: page
        })
      }
      pages.push({
        label: `...`,
        value: this.maxDsiplayPages + 1
      })
    } else if (this.currentPage > rightRange) { // 顯示全部的右半邊數字
      pages.push({
        label: `...`,
        value: this.totalPages - this.maxDsiplayPages
      })
      pages.push({
        label: `${this.totalPages - this.maxDsiplayPages + 1}`,
        value: this.totalPages - this.maxDsiplayPages + 1
      })

      for (let page = this.totalPages - this.maxDsiplayPages + 2; page <= this.totalPages; page++) {
        pages.push({
          label: `${page}`,
          value: page
        })
      }
    } else { // 左右顯示 boundary
      // 第一頁
      if (!this.showFirstLastIconButton || this.currentPage === 1) {
        pages.push({
          label: `${1}`,
          value: 1
        })
      }
      pages.push({
        label: `...`,
        value: this.currentPage - boundaryShowNumber - 1
      })
      
      for (let page = this.currentPage - boundaryShowNumber; page <= this.currentPage + boundaryShowNumber; page++) {
        pages.push({
          label: `${page}`,
          value: page
        })
      }

      pages.push({
        label: `...`,
        value: this.currentPage + boundaryShowNumber + 1
      })

      // 最後一頁
      if (!this.showFirstLastIconButton || this.currentPage === this.totalPages) {
        pages.push({
          label: `${this.totalPages}`,
          value: this.totalPages
        })
      }
    }

    return pages
  }

  public rowPerPageSelectInput (event: Event) {
    this.rowPerPage = Number.parseInt((<HTMLInputElement>event.target).value)
  }

  public dynamicNumberClass (page: number) {
    return [
      this.buttonCSSClass,
      this.numberCSSClass,
      this.currentPage === page ? this.activeNumberCSSClass : ''
    ]
  }
}
