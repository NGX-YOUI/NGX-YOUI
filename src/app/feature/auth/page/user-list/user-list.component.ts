import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, ITable, ITableSelected, NotificationPositionEnum, NotificationService } from 'ngx-youi';
import { finalize, take } from "rxjs/operators";
import { LoadingDialogComponent } from "src/app/shared/component/loading-dialog/loading-dialog.component";
import { ListPageMixin } from "src/app/shared/mixin/ListPageMixin";
import { IOption } from "src/app/shared/model/form/IOption";
import { UserService } from "src/app/shared/service/UserService";
import { IUserList } from "../../model/IUserList";

@Component({
  selector: 'app-user-list.component',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends ListPageMixin<IUserList>() {
  table: ITable<IUserList> = {
    columns: [
      { name: 'username', label: 'Username' },
      { name: 'name', label: 'Show Name' },
      { name: 'roles', label: 'Role' },
      { name: 'status', label: 'Status' },
      { name: 'actions', label: 'Action' }
    ],

    tableData: [
      
    ],
    selectedList: new Set<IUserList>()
  };

  options: {[key: string]: IOption<any>[]} = {
    roles: [
      { label: 'All', value: '' },
      { label: 'Manger', value: 0 },
      { label: 'User', value: 1 }
    ],
    status: [
      { label: 'All', value: '' },
      { label: 'Inactived', value: 0 },
      { label: 'Actived', value: 1 },
      { label: 'Disabled', value: 2 },
    ]
  }
  
  protected searchFormInitValue: {[key:string]: any  }

  searchForm: FormGroup = this.formBuilder.group({
    username: [''],
    name: [''],
    role: [''],
    status: ['']
  })

  isLoading = false

  constructor(public router: Router
            , protected route: ActivatedRoute
            , public userService: UserService
            , private formBuilder: FormBuilder
            , private dialogService: DialogService
            , private notificationService: NotificationService) {
    super(router, route)
  }

  async searchData () {
    this.table.tableData = []
    this.isLoading = true
    
    return this.userService.getUsers().pipe(
      finalize(() => {
        this.isLoading = false
      })
    ).toPromise().then(result => {
      this.table.tableData = result
      this.pagination.totalRowsCount = this.table.tableData.length
      return Promise.resolve()
    }).catch((error) => {
      return Promise.reject(error)
    })
  }

  getOptionText (name: string, value: any) {
    return this.options[name].find((option: { value: any }) => option.value === value).label
  }

  selectedChange (seletedInfo: ITableSelected<IUserList>) {
    this.table.selectedList = seletedInfo.allSelectedData
    console.log(this.table.selectedList)
  }

  async deleteBatch () {
    const dialog = this.dialogService.confirm({
      title: `Confirm Delete`,
      body: `Do you want to delete ${this.table.selectedList.size} users ?`
    })

    const result = await dialog.closeEmitter.pipe(
      take(1)
    ).toPromise()

    if (result) {
      const loadingDialog = this.dialogService.open(LoadingDialogComponent, null, null, {
        backdropCSSClass: 'bg-black/70',
        closeAfterClick: false
      })
      
      setTimeout(() => {
        loadingDialog.handleClose()
        this.notificationService.success(NotificationPositionEnum.topRight, {
          title: 'Success',
          content: `Delete ${this.table.selectedList.size} users !`
        })
      }, 2000)
    }
  }

  async deleteUser (user: IUserList) {
    const dialog = this.dialogService.confirm({
      title: `Confirm Delete`,
      body: `Do you want to delete user: ${user.username} ?`
    })

    const result = await dialog.closeEmitter.pipe(
      take(1)
    ).toPromise()
    
    if (result) {
      const loadingDialog = this.dialogService.open(LoadingDialogComponent, null, null, {
        backdropCSSClass: 'bg-black/70',
        closeAfterClick: false
      })
      
      setTimeout(() => {
        loadingDialog.handleClose()
        this.notificationService.success(NotificationPositionEnum.topRight, {
          title: 'Success',
          content: `Delete user ${user.username} !`
        })
      }, 2000)
    }
  }
}