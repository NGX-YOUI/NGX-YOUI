import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ICodeTab } from './ICodeTab';

@Component({
  selector: 'app-code-tab',
  templateUrl: './code-tab.component.html',
  styleUrls: ['./code-tab.component.scss'],
  animations: [
    trigger('expandedAnimation', [
      state('expanded', style({height: '*', visibility: 'visible'})),
      state('collapsed', style({height: '0px', visibility: 'hidden'})),
      transition('expanded <=> collapsed',
      animate('200ms cubic-bezier(.37,1.04,.68,.98)'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class CodeTabComponent implements OnInit {
  @Input() sample: ICodeTab

  constructor() { }

  ngOnInit(): void {
  }

}
