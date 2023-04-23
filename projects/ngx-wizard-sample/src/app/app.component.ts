import { Component } from '@angular/core';
import { Step1Component } from './wizard-steps/step1.component';
import { Step2Component } from './wizard-steps/step2.component';
import { Step3Component } from './wizard-steps/step3.component';
import { Step4Component } from './wizard-steps/step4.component';
import { IStepperOptions, IWizardStep, FormWizardService } from 'ngx-form-wizard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-wizard-sample';

  steps: IWizardStep[] = [
    { id: 1, title: 'Personal Info', description: 'Personal Description', data: null, component: Step1Component },
    { id: 2, title: 'Education', description: 'Eduction Description', data: null, component: Step2Component },
    { id: 3, title: 'Work Experience', description: 'Work Description', data: null, component: Step3Component },
    { id: 4, title: 'Review', description: 'Review Description', data: null, component: Step4Component }
  ];

  stepperOptions: IStepperOptions = {
    custom: true,
    position: 'right'
  };

  constructor(private wizardService: FormWizardService) {}

  onFinish(): void {
    alert('Wizard Finished!!');
    this.resetWizard();
  }

  onCancel(): void {
    alert('Wizard Cancelled!!');
    this.resetWizard();
  }

  resetWizard(): void {
    this.wizardService.getSteps().forEach(step => {
      step.data = null;
      step.dataValidated = false;
    });
  }

  getObjectKeys(obj: any) {
    return obj ? Object.keys(obj): [];
  }

  print(a: any) {
    console.log(a);
  }
}
