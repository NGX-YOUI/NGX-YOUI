import { ActivatedRoute, Router } from "@angular/router"
import { filter, takeUntil } from 'rxjs/operators';
import { BaseMixin } from "./BaseMixin";

/**
 * 分頁元件的 Mixin
 * @param BaseClass Mixin 要繼承的類別，可以放入其他 Mixin Function
 * @returns Mixin 之後的類別
 */
export function PaginationPageMixin(BaseClass: any = class {}) {
  return class extends BaseMixin(BaseClass){
    /**
     * 分頁用變數，可自行覆寫
     * @member nowPage: 目前頁數
     * @member rowPerPage 一頁幾筆
     * @member totalRowsCount 總筆數
     */
    public pagination = {
      nowPage: 1,
      rowPerPage: 10,
      totalRowsCount: 0
    }

    constructor(public router: Router, protected route: ActivatedRoute) {
      super()
    }

    /**
     * 啟動偵測路由分頁參數，當分頁變化時執行查詢
     * @optional 自行在 ngOnInit 呼叫啟用
     */
    protected observePaginationRoute () {
      this.route.queryParams.pipe(
        filter(params => params.page || params.rowPerPage),
        takeUntil(this.destoryed$)
      ).subscribe(params => {
        this.pagination.nowPage = params.page ? Number.parseInt(params.page) : this.pagination.nowPage
        this.pagination.rowPerPage = params.rowPerPage ? Number.parseInt(params.rowPerPage) : this.pagination.rowPerPage
        this.searchData()
      })
    }

    /**
     * 當分頁切換時的動作，預設改變 router 的 page 參數
     * @virtual 若無需使用路由控制分頁參數，請自行覆寫
     */
    public onPageChange (page?: number, rowPerPage?: number) {
      const url = this.router.parseUrl(this.router.url).root.children.primary.segments.join('/')
      
      this.router.navigate([`/${url}`], {
        queryParams: {
          page: page ?? this.pagination.nowPage,
          rowPerPage: rowPerPage
        }
      })
    }

    /**
     * 當路由的分頁參數改變後執行的分頁查詢
     * @abstract 需自行實作
     */
    public searchData () {}
  }
}
