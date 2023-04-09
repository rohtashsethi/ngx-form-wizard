import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxWizardStep]'
})
export class NgxWizardStepDirective {
  constructor(public viewContaianerRef: ViewContainerRef) {}
}
