import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NotificationPositionEnum, NotificationService } from 'ngx-youi';
import { UserCrudComponent } from '../../component/user-crud-wrapper/user-crud-wrapper.component';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @ViewChild('crud_wrapper', {static: false}) crud_wrapper: UserCrudComponent

  constructor(private notificationService: NotificationService
            , private route: ActivatedRoute
            , private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title'])
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
