import { IFormAsyncValidator } from "../validator/IAsyncValidator";
import { IFormValidator } from "../validator/IValidator";

/**
 * @param defaultValue 預設值
 * @param syncValidators 同步校驗方法
 * @param asyncValidators 非同步校驗方法
 */
export interface IFormSetting {
  defaultValue: any,
  syncValidators?: IFormValidator[],
  asyncValidators?: IFormAsyncValidator[]
}