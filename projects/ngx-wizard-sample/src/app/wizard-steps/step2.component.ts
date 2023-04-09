import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IWizardStep, IWizardStepBase, NgxWizardService } from "projects/ngx-wizard/src/public-api";

@Component({
  selector: 'step2',
  template: `
    <form [formGroup]="form">
      <div>
        <label>College</label>
        <input type="text" formControlName="college">
      </div>
    </form>
  `
})
export class Step2Component implements IWizardStepBase {
  stepIdx = 1;
  allStepConfig: IWizardStep[] = [];
  stepConfig: IWizardStep = <IWizardStep>{};
  form = new FormGroup({
    college: new FormControl('', [Validators.required])
  });

  constructor(private wizardService: NgxWizardService) {}
}
