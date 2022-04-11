import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DialogService, ITable, NotificationPositionEnum, NotificationService } from 'ngx-youi';
import { CustomDialogComponent } from '../../demo/page/dialog/custom-dialog/custom-dialog.component';
import { HomeSample } from './home.sample';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sampleCode = JSON.parse(JSON.stringify(HomeSample))

  constructor( private dialogService: DialogService
            ,  private notificationService: NotificationService
            ,  private route: ActivatedRoute
            ,  private titleService: Title) { }

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

  openCustomComponent () {
    const dialog = this.dialogService.open(CustomDialogComponent, {
      customTitle: 'TITLE',
      customBody: 'name:'
    })

    dialog.customOpenEmitter.subscribe(() => {
      console.log(`Custom dialog open!`)
      dialog.customOpenEmitter.unsubscribe()
    })

    dialog.customOkEmitter.subscribe(result => {
      console.log(`Custom dialog OK!: ${result}`)
      dialog.customOkEmitter.unsubscribe()
    })

    dialog.closeEmitter.subscribe(() => {
      console.log(`Custom dialog close!`)
      dialog.closeEmitter.unsubscribe()
    })
  }
  
  showCustomNotify () {
    const randomNumber = Math.floor(Math.random()* 100000) + 1
    this.notificationService.basic(NotificationPositionEnum.topRight, {
      title: 'title custom',
      content: `content custom ${randomNumber}`,
      icon: 'thumb_up',
      timeout: 5000,
      styles: {
        iconCSSClass: 'custom-youi-notification-icon',
        wrapperClass: 'custom-notification-wrapper',
        titleCSSClass: 'custom-youi-notification-title',
        contentCSSClass: 'custom-notification-content',
        closeCSSClass: 'custom-youi-notification-close'
      }
    }, null)
  }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
  }
}
