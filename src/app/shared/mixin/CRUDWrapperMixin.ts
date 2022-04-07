import { Component, Input } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { IFormSetting } from '../model/form/IFormSetting';
import { BaseMixin } from './BaseMixin';

@Component({
  template:''
})

export class CRUDWrapperMixin extends BaseMixin() {
  @Input() mode: string = 'read';
  /**
   * 設定表單初始值
   */
  form: FormGroup;

  /**
   * 設定表單的初始值與驗證
   */
  formSetting: { [key: string]: IFormSetting }

  constructor(
    protected forumBuilder: FormBuilder
  ) {
    super()
  }

  ngOnInit(): void {
    this.settingForm();
  }
  
  protected settingForm () {
    const formJson: any = {}

    for (let field in this.formSetting) {
      let fieldSyncValidators: ValidatorFn[]
      let fieldAsyncValidators: AsyncValidatorFn[]

      if (this.formSetting[field].syncValidators) {
        fieldSyncValidators = this.formSetting[field].syncValidators
                                  .filter(validator => validator.mode.includes(this.mode))
                                  .map(validator => validator.validatorFn)
      }

      if (this.formSetting[field].asyncValidators) {
        fieldAsyncValidators = this.formSetting[field].asyncValidators
                                   .filter(validator => validator.mode.includes(this.mode))
                                   .map(validator => validator.validatorFn)
      }

      formJson[field] = [this.formSetting[field].defaultValue, fieldSyncValidators, fieldAsyncValidators]
    }

    this.form = this.forumBuilder.group(formJson)
  }

  /**
   * 比對是否為對應的 CRUD 模式
   */
  public matchCrudMode(modes: string[]) {
    return modes.indexOf(this.mode) >= 0;
  }

  /**
   * 顯示欄位的錯誤狀態與資訊
   * @param fieldName formGroup 欄位，只有當 touch 的時候才會顯示
   * @returns {boolean} result.hasError: 欄位是否有任何錯誤
   * @returns {Object} result.errors: 欄位底下的所有錯誤
   */
  public fieldHasError(fieldName: string) {
    const hasError =
      !this.form.controls[fieldName].valid &&
      this.form.controls[fieldName].touched;
    return {
      hasError,
      errors: hasError ? this.form.controls[fieldName].errors : {},
    };
  }
}
