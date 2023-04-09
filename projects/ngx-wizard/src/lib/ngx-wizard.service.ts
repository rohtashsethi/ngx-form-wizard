import { Injectable } from '@angular/core';
import { IWizardStep } from './ngx-wizard.model';

@Injectable({
  providedIn: 'root'
})
export class NgxWizardService {

  private stepConfig: IWizardStep[] = [];

  getStepConfiguration(): IWizardStep[] {
    return this.stepConfig;
  }

  setStepConfiguration(config: IWizardStep[]): void {
    this.stepConfig = config;
  }
}
