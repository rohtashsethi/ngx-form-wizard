import { Component } from "@angular/core";
import { IWizardStep, NgxWizardService, WizardStepBaseComponent } from "projects/ngx-wizard/src/public-api";

@Component({
  selector: 'step4',
  template: `
    <div>
      <ng-container *ngFor="let item of prevSteps">
        <label>{{ item.title }}</label>
        <pre>{{ item.data | json }}</pre>
      </ng-container>
    </div>
  `
})
export class Step4Component extends WizardStepBaseComponent {

  prevSteps: IWizardStep[] = [];

  constructor(private wizardService: NgxWizardService) {
    super(4, wizardService.getStepConfiguration());
    this.prevSteps = this.allStepConfig.slice(0, this.stepNo);
  }

}
