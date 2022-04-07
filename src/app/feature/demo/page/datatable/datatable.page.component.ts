import { Component, OnInit } from '@angular/core';
import { ITable, ITableSelected } from 'ngx-youi';
import { DatatableSample } from './datatable.page.sample';

@Component({
  selector: 'youi-datatable-page',
  templateUrl: './datatable.page.component.html',
  styleUrls: ['./datatable.page.component.scss']
})
export class DatatablePageComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(DatatableSample))

  basicTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ]
  }

  columnTemplateTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
      { name: 'action', label: 'ACTION' }
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ]
  }

  selectionTable: ITable<any> = {
    columns: [
      { name: 'username', label: 'USER NAME' },
      { name: 'name', label: 'NAME' },
      { name: 'status', label: 'STATUS' },
    ],

    tableData: [
      {
        username: 'admin',
        name: 'Alan',
        status: 0
      },
      {
        username: 'user',
        name: 'Steven',
        status: 1
      },
      {
        username: 'guest',
        name: 'Mike',
        status: 2
      }
    ],
    selectedList: new Set<any>(),
    rowCSSClassFn: (row: any) => {
      return row.username === 'user' ? 'bg-red-300' : ''
    },
    rowSelectDisableFn: (row: any) => {
      return row.username === 'user' ? true : null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  getOptionText (name: string, value: any) {
    const options: {[key: string]: any[]} = {
      status: [
        { label: 'All', value: '' },
        { label: 'InActive', value: 0 },
        { label: 'Active', value: 1 },
        { label: 'Disabled', value: 2 },
      ]
    }

    return options[name].find((option: { value: any }) => option.value === value).label
  }

  selectedChange (seletedInfo: ITableSelected<any>) {
    this.selectionTable.selectedList = seletedInfo.allSelectedData
    console.log(seletedInfo)
  }
}
