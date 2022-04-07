import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDWrapperMixin } from 'src/app/shared/mixin/CRUDWrapperMixin';
import { IFormSetting } from 'src/app/shared/model/form/IFormSetting';
import { valueMatch } from 'src/app/shared/model/validator/ValidatorFns';

@Component({
  selector: 'user_crud_wrapper',
  templateUrl: './user-crud-wrapper.component.html',
  styleUrls: ['./user-crud-wrapper.component.scss'],
})
export class UserCrudComponent extends CRUDWrapperMixin {
  options: any = {
    roles: [
      { label: 'Manger', value: 0 },
      { label: 'User', value: 1 },
    ],
  };

  formSetting: { [key: string]: IFormSetting } = {
    userId: {
      defaultValue: ''
    },
    username: {
      defaultValue: '',
      syncValidators: [{ validatorFn: Validators.required, mode: ['create'] }],
    },
    password: {
      defaultValue: '',
      syncValidators: [
        { validatorFn: Validators.required, mode: ['create'] },
        { validatorFn: valueMatch('confirmPassword', false), mode: ['create', 'edit'] }
      ]
    },
    confirmPassword: {
      defaultValue: '',
      syncValidators: [
        { validatorFn: Validators.required, mode: ['create'] },
        { validatorFn: valueMatch('password'), mode: ['create', 'edit'] }
      ]
    },
    name: {
      defaultValue: '',
      syncValidators: [{ validatorFn: Validators.required, mode: ['create', 'edit'] }]
    },
    email: {
      defaultValue: '',
      syncValidators: [
        { validatorFn: Validators.required, mode: ['create', 'edit'] },
        { validatorFn: Validators.email, mode: ['create', 'edit'] },
      ]
    },
    roles: {
      defaultValue: '',
      syncValidators: [{ validatorFn: Validators.required, mode: ['create', 'edit'] }]
    }
  }

  constructor(protected forumBuilder: FormBuilder) {
    super(forumBuilder);
  }
}
