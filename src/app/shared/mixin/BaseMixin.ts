import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

/**
 * 所有 Mixin 繼承的基底 Mixin，用於封裝共用的 Life Cycle
 * 可搭配 RxJs 的 takeUntil(this.destoryed$) 自動解除訂閱
 */

export function BaseMixin (BaseClass: any = class {}) {
  return class extends BaseClass implements OnInit, OnDestroy {
    public destoryed$ = new Subject<any>()

    ngOnInit(): void {
      
    }

    ngOnDestroy(): void {
      this.destoryed$.next(true)
      this.destoryed$.unsubscribe()
    }
  }
}