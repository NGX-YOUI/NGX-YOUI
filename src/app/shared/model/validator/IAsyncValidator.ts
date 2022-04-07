import { AsyncValidatorFn } from "@angular/forms";

export interface IFormAsyncValidator {
  validatorFn: AsyncValidatorFn,
  mode: string[]
}