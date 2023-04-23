import { Type } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface IWizardStep {
  id: number;
  title: string;
  description: string;
  component: Type<any>;
  data?: any;
  dataValidated?: boolean;
}

export interface IWizardControls {
  [key: string]: FormControl | FormGroup | FormArray;
}

export type StepperPosition = 'top' | 'right';

export interface IStepperOptions {
  custom: boolean;
  position: StepperPosition;
}

export const STEPPER_DEFAULTS: IStepperOptions = {
  custom: false,
  position: 'right'
} as const;
