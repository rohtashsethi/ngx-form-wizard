import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FormWizardService, FormWizardStepBaseComponent } from "ngx-form-wizard";

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
export class Step2Component extends FormWizardStepBaseComponent {

  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      'college':  new FormControl('', [ Validators.required ])
    };
    super(2, wizardService.getSteps(), true, formcontrols);
  }
}
