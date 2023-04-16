import { Type } from "@angular/core";
import { FormGroup } from "@angular/forms";

export interface IWizardStep {
  id: number;
  title: string;
  description: string;
  component: Type<any>;
  data?: any;
  dataValidated?: boolean;
}

/**
 * This interface needs to be implemented by every Wizard Step Component
 */
export interface IWizardStepBase {
  stepIdx: number;
  form: FormGroup;
  stepConfig: IWizardStep;
  allStepConfig: IWizardStep[];
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
