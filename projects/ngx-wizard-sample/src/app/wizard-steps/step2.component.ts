import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NgxWizardService, WizardStepBaseComponent } from "ngx-wizard";

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
export class Step2Component extends WizardStepBaseComponent {

  constructor(private wizardService: NgxWizardService) {
    const formcontrols = {
      'college':  new FormControl('', [ Validators.required ])
    };
    super(2, wizardService.getStepConfiguration(), true, formcontrols);
  }
}
