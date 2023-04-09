import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { IWizardStep, IWizardStepBase, NgxWizardService } from "projects/ngx-wizard/src/public-api";

@Component({
  selector: 'step1',
  template: `
    <form [formGroup]="form">
      <div>
        <label>Name</label>
        <input type="text" formControlName="name">
      </div>
    </form>
  `
})
export class Step1Component implements IWizardStepBase {
  stepIdx = 0;
  allStepConfig: IWizardStep[] = [];
  stepConfig: IWizardStep = <IWizardStep>{};
  form = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private wizardService: NgxWizardService) {}
}
