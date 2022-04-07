import { ValidatorFn } from "@angular/forms";

export interface IFormValidator {
  validatorFn: ValidatorFn,
  mode: string[]
}
