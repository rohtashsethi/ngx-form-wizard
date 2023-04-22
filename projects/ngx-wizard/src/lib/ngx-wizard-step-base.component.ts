import { FormGroup } from "@angular/forms";
import { IWizardStep, WizardFormControls } from "./ngx-wizard.model";

/**
 * This interface needs to be implemented by every Wizard Step Component
 */
export abstract class WizardStepBaseComponent {
  stepNo: number;
  form: FormGroup;
  isFormExists: boolean = false;
  allStepConfig: IWizardStep[];

  constructor(stepNo: number, config: IWizardStep[] = [], isFormNeeded: boolean = false, formControls: WizardFormControls = {}) {
    this.stepNo = stepNo;
    this.allStepConfig = config;
    this.isFormExists = isFormNeeded;
    this.form = isFormNeeded ? new FormGroup(formControls) : <FormGroup>{};
  }

  getCurrentStepConfig(): IWizardStep {
    return this.allStepConfig[this.stepNo - 1];
  }
}
