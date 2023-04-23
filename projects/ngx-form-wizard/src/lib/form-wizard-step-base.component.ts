import { FormGroup } from "@angular/forms";
import { IWizardStep, IWizardControls } from "./form-wizard.model";

/**
 * This interface needs to be implemented by every Wizard Step Component
 */
export abstract class FormWizardStepBaseComponent {
  stepNo: number;
  form: FormGroup;
  steps: IWizardStep[];
  isFormNeeded: boolean = false;

  constructor(stepNo: number, steps: IWizardStep[] = [], isFormNeeded: boolean = false, formControls: IWizardControls = {}) {
    this.stepNo = stepNo;
    this.steps = steps;
    this.isFormNeeded = isFormNeeded;
    this.form = isFormNeeded ? new FormGroup(formControls) : <FormGroup>{};
  }

  getCurrentStepInfo(): IWizardStep {
    return this.steps[this.stepNo - 1];
  }
}
