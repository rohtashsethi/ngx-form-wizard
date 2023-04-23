import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FormWizardService, FormWizardStepBaseComponent } from "ngx-form-wizard";

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
export class Step1Component extends FormWizardStepBaseComponent {

  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      'name':  new FormControl('', [ Validators.required ])
    };
    super(1, wizardService.getSteps(), true, formcontrols);
  }

}
