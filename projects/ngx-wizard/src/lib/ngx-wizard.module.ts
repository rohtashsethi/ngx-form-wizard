import { NgModule } from '@angular/core';
import { NgxWizardComponent } from './ngx-wizard.component';
import { NgxWizardStepDirective } from './ngx-wizard-step.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxWizardComponent,
    NgxWizardStepDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxWizardComponent
  ]
})
export class NgxWizardModule { }
