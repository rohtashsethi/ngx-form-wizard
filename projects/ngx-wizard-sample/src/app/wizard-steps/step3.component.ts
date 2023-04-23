import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FormWizardService, FormWizardStepBaseComponent } from "ngx-form-wizard";

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
export class Step3Component extends FormWizardStepBaseComponent {

  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      'company':  new FormControl('', [ Validators.required ])
    };
    super(3, wizardService.getSteps(), true, formcontrols);
  }

}
