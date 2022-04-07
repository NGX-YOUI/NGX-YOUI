import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * 驗證欄位值是否與目標欄位的值一樣
 * @param target 目標的欄位名稱
 * @param isConfirm 是否是再次確認的欄位 (ex. 確認密碼)
 * @returns 
 */
export function valueMatch (target: string, isConfirm = true): ValidatorFn {
  return (sourceControl: AbstractControl): ValidationErrors | null => {
    if (!sourceControl.root.get(target)) {
      return null
    }

    const targetControl = sourceControl.root.get(target)

    if (isConfirm === false) {
      targetControl.updateValueAndValidity()
      return null  
    }

    if (targetControl.errors && !targetControl.errors.matching) {
      return null
    }

    if (sourceControl.value !== targetControl.value) {
      return { valueMatch: true }
    }
    return null
  }
}