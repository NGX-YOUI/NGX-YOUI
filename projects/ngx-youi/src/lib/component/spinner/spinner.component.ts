import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChild,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'youi-spinner',
  templateUrl: './spinner.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease',
          style({ opacity: 1 }))
      ]),
      transition(':leave', [
        query('.spinner-svg, .spinner-template', style({ display: 'none' })),
        style({ opacity: 1 }),
        animate('300ms ease',
          style({ opacity: 0 }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpinnerComponent implements OnInit {
  private _iconName: string

  /**
   * 設定 SVG 的類型
   * 參考 https://samherbert.net/svg-loaders/
   */
  @Input() set iconName(value: string) {
    this._iconName = value
    
    if (!value) {
      this.svgHTML = ''
      return
    }

    const headers = new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8'
    });
    
    this.http
      .get(`assets/svg-loaders/${this._iconName}.svg`, {
        headers,
        responseType: 'text',
      })
      .toPromise()
      .then((result: any) => {
        const tag: any = new DOMParser()
          .parseFromString(result, 'text/xml')
          .querySelector('svg');

        tag.removeAttribute('fill', '');
        tag.removeAttribute('stroke', '');
        tag.setAttribute('width', '100%');
        tag.setAttribute('height', '100%');

        this.svgHTML = tag.outerHTML;

        this.cdf.markForCheck()
      }).catch(error => {
        this.svgHTML = ''

        this.cdf.markForCheck()
      })
  }

  /**
   * 背景的樣式，可自行套用 background 來更改背景
   */
  @Input() backdropCSSClass = '';

  /**
   * loading 的圖案樣式，可自行套用 fill 與 stroke 修改顏色
   * width、height 修改寬高
   */
  @Input() svgCSSClass = ''

  /**
   * 圖案下方的 template 樣式
   */
  @Input() textTemplateCSSClass = ''

  /**
   * loading 的開關
   */
  @Input() isLoading = false;

  /**
   * 自定義 icon 的 template
   */
  @ContentChild('iconTemplate', { static: false }) iconTemplate: TemplateRef<any>;

  /**
   * 自定義的文字內容 template
   */
  @ContentChild('textTemplate', { static: false }) textTemplate: TemplateRef<any>;

  /**
   * 最後渲染出來的 SVG Tag
   */
  svgHTML: string = '';

  constructor(public http: HttpClient, private cdf: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this._iconName === undefined && !this.iconTemplate) {
      this.iconName = 'oval'
    }
  }
}
