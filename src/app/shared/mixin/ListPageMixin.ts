import { FormGroup } from "@angular/forms";
import { ITable } from 'ngx-youi';
import { BaseMixin } from "./BaseMixin";
import { PaginationPageMixin } from "./PaginationPageMixin";

/**
 * 清單頁元件 Mixin
 * @param BaseClass Mixin 要繼承的類別，可以放入其他 Mixin Function
 * @returns Mixin 之後的類別
 */

export function ListPageMixin<T>(BaseClass: any = class {}) {
  return class extends PaginationPageMixin(BaseMixin(BaseClass)){
    public table: ITable<T>
    public searchForm: FormGroup
    
    /**
     * 頁面進入時，自動進行查詢
     * 
     */
    ngOnInit() {
      super.ngOnInit()

      this.searchFormInitValue = this.searchForm.value
      if (!this.route.snapshot.queryParams['page'] && !this.route.snapshot.queryParams['rowPerPage']) {
        this.searchData()
      }
      this.observePaginationRoute()
    }

    /**
     * 表單欄位的初始值
     */
    protected searchFormInitValue: { [key: string]: any }
    
    /**
     * 查詢清單資料的 Function
     * @abstract 需自行實作
     */
    public async searchData<T> (): Promise<T | void> {}

    /**
     * 重置搜尋條件
     * @virtual 可自行 Ovveride
     */
    public async resetSearch () {
      this.searchForm.reset(this.searchFormInitValue)
      this.searchData()
    }

    /**
     * 送出清單查詢 Function
     * @virtual 可自行 Override
     */
    public async submitForm<T> (): Promise<T | void> {
      this.searchData()
    }
  }
}