import { Injectable } from '@angular/core';
import { IWizardStep } from './form-wizard.model';

@Injectable({
  providedIn: 'root'
})
export class FormWizardService {

  private steps: IWizardStep[] = [];

  getSteps(): IWizardStep[] {
    return this.steps;
  }

  setSteps(config: IWizardStep[]): void {
    this.steps = config;
  }
}
