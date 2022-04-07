import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakPointService {
  breakpoint = 'xs'
  
  private breakPoints: {[key: string]: number} = {
    "sm": 576,
    "md": 768,
    "lg": 992,
    "xl": 1200,
    "xxl": 1600
  }

  constructor (private breakPointObserve: BreakpointObserver) {
    this.observeBreakPoint()
  }

  /**
   * 比對目前的解析度是否符合指定的 breakpoint
   * @param breakpoint breakpoint 名稱
   * @returns boolean
   */
  public matchBreakPoint (breakpoint: string): boolean {
    return this.breakPointObserve.isMatched(this.getBreakPointMedia(breakpoint))
  }

  
  private getBreakPointMedia (breakPoint: string) {
    return `(max-width: ${this.breakPoints[breakPoint]}px)`
  }
  
  private observeBreakPoint () {
    const breakPointMedias = Object.values(this.breakPoints).map(data => `(max-width: ${data}px)`)
    this.breakPointObserve.observe(breakPointMedias)
      .subscribe(result => {
        for (let breakpoint of Object.keys(this.breakPoints)) {
          const breakPointMedia = this.getBreakPointMedia(breakpoint)

          if (result.breakpoints[breakPointMedia] === true) {
            this.breakpoint = breakpoint
            return
          }
        }
        this.breakpoint = 'xs'
      })
  }
}