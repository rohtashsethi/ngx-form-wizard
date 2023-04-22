import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NgxWizardService, WizardStepBaseComponent } from "projects/ngx-wizard/src/public-api";

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
export class Step3Component extends WizardStepBaseComponent {

  constructor(private wizardService: NgxWizardService) {
    const formcontrols = {
      'company':  new FormControl('', [ Validators.required ])
    };
    super(3, wizardService.getStepConfiguration(), true, formcontrols);
  }

}
