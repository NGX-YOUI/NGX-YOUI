import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService, NotificationPositionEnum, NotificationService } from 'ngx-youi';
import { take } from 'rxjs/operators';
import { LoadingDialogComponent } from 'src/app/shared/component/loading-dialog/loading-dialog.component';
import { UserService } from 'src/app/shared/service/UserService';
import { UserCrudComponent } from '../../component/user-crud-wrapper/user-crud-wrapper.component';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.scss']
})
export class UserReadComponent implements AfterViewInit {
  @ViewChild('crud_wrapper', {static: false}) crud_wrapper: UserCrudComponent
  
  constructor(public router: Router
    , protected route: ActivatedRoute
    , private userService: UserService
    , private dialogService: DialogService
    , private notificationService: NotificationService
    , private titleService: Title) { }

  ngAfterViewInit(): void {
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

  getFormValue (field: string) {
    return this.crud_wrapper.form.get(field).value
  }

  async delete () {
    const dialog = this.dialogService.confirm({
      title: `Confirm Delete`,
      body: `Do you want to delete user: ${this.getFormValue('username')} ?`
    })

    const result = await dialog.closeEmitter.pipe(
      take(1)
    ).toPromise()
    
    if (result) {
      const loadingDialog = this.dialogService.open(LoadingDialogComponent, {
        styles: {
          loadingCSSClass: 'fill-white stroke-white text-white'
        }
      }, null, {
        hasBackdrop: true,
        backdropCSSClass: 'bg-black/70'
      })
      
      setTimeout(() => {
        loadingDialog.handleClose()
        this.notificationService.success(NotificationPositionEnum.topRight, {
          title: 'Success',
          content: `Delete user ${this.getFormValue('username')} !`
        })

        this.router.navigate(['/auth/user/list'])
      }, 2000)
    }
  }
}
