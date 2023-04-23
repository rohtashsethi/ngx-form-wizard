import { NgModule } from '@angular/core';
import { FormWizardComponent } from './form-wizard.component';
import { FormWizardStepDirective } from './form-wizard-step.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FormWizardComponent,
    FormWizardStepDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormWizardComponent
  ]
})
export class FormWizardModule { }
