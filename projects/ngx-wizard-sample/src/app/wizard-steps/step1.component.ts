import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NgxWizardService, WizardStepBaseComponent } from "projects/ngx-wizard/src/public-api";

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
export class Step1Component extends WizardStepBaseComponent {

  constructor(private wizardService: NgxWizardService) {
    const formcontrols = {
      'name':  new FormControl('', [ Validators.required ])
    };
    super(1, wizardService.getStepConfiguration(), true, formcontrols);
  }

}
