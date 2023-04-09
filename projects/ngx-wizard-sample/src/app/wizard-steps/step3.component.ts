import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IWizardStep, IWizardStepBase, NgxWizardService } from "projects/ngx-wizard/src/public-api";

@Component({
  selector: 'step3',
  template: `
    <form [formGroup]="form">
      <div>
        <label>Company</label>
        <input type="text" formControlName="company">
      </div>
    </form>
  `
})
export class Step3Component implements IWizardStepBase {
  stepIdx = 2;
  allStepConfig: IWizardStep[] = [];
  stepConfig: IWizardStep = <IWizardStep>{};
  form = new FormGroup({
    company: new FormControl('', [Validators.required])
  });

  constructor(private wizardService: NgxWizardService) {}

}
