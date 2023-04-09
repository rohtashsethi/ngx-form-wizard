import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IWizardStep, IWizardStepBase, NgxWizardService } from "projects/ngx-wizard/src/public-api";

@Component({
  selector: 'step4',
  template: `
    <div>
      <ng-container *ngFor="let item of allStepConfig">
        <label>{{ item.title }}</label>
        <pre>{{ item.data | json }}</pre>
      </ng-container>
    </div>
  `
})
export class Step4Component implements IWizardStepBase {
  stepIdx = 3;
  stepConfig: IWizardStep = <IWizardStep>{};
  allStepConfig: IWizardStep[] = [];
  form!: FormGroup;

  constructor(private wizardService: NgxWizardService) {}

  ngOnInit(): void {
    const stepConfiguration = this.wizardService.getStepConfiguration();
    this.allStepConfig = stepConfiguration.slice(0, this.stepIdx);
  }
}
