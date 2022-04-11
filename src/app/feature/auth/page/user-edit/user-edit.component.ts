import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DialogService, NotificationPositionEnum, NotificationService } from 'ngx-youi';
import { LoadingDialogComponent } from 'src/app/shared/component/loading-dialog/loading-dialog.component';
import { UserService } from 'src/app/shared/service/UserService';
import { UserCrudComponent } from '../../component/user-crud-wrapper/user-crud-wrapper.component';

@Component({
  selector: 'app-user_edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @ViewChild('crud_wrapper', {static: false}) crud_wrapper: UserCrudComponent

  constructor(private notificationService: NotificationService
            , private userService: UserService
            , private dialogService: DialogService
            , private route: ActivatedRoute
            , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
    this.getData()
  }

  getData () {
    const loadingDialog = this.dialogService.open(LoadingDialogComponent, null, null, {
      backdropCSSClass: 'bg-black/70',
      closeAfterClick: false
    })

    const userId = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(userId).toPromise().then(user => {
      for (let property in user) {
        if (this.crud_wrapper.form.controls[property]) {
          this.crud_wrapper.form.controls[property].setValue((user as any)[property] ?? '')
        }
      }
      loadingDialog.handleClose()
    })
  }

  public submitForm() {
    this.crud_wrapper.form.markAllAsTouched()
    
    if (this.crud_wrapper.form.valid === true) {
      this.notificationService.success(NotificationPositionEnum.topRight, {
        title: 'Success !',
        content: 'Finish edit user !'
      })
    } else {
      this.notificationService.error(NotificationPositionEnum.topRight, {
        title: 'Failed !',
        content: 'Form validation error !'
      })
    }
  }
}
