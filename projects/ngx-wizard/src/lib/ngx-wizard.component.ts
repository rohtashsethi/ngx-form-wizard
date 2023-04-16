import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild, HostBinding } from '@angular/core';
import { NgxWizardStepDirective } from './ngx-wizard-step.directive';
import { IStepperOptions, IWizardStep, IWizardStepBase, STEPPER_DEFAULTS } from './ngx-wizard.model';
import { NgxWizardService } from './ngx-wizard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-wizard',
  templateUrl: './ngx-wizard.component.html',
  styleUrls: ['./ngx-wizard.component.scss']
})
export class NgxWizardComponent implements OnInit, OnDestroy {

  @Input() steps: IWizardStep[] = [];
  @Input() stepperOptions: IStepperOptions = STEPPER_DEFAULTS;

  @Output() finished: EventEmitter<void> = new EventEmitter();
  @Output() cancelled: EventEmitter<void> = new EventEmitter();

  @ViewChild(NgxWizardStepDirective, { static: true }) wizardStep!: NgxWizardStepDirective;

  @HostBinding('class.stepper-positioned-right') stepperRight = false;

  noOfSteps: number = 0;
  activeStep: number = 0;
  isLastStep: boolean = false;
  isFirstStep: boolean = true;
  activeStepInfo: IWizardStep = <IWizardStep>{};
  componentChangesSub: Subscription | undefined;

  // Stepper variables
  stepperClass: string = 'stepper';
  useCustomStepper: boolean = false;

  constructor(private wizardService: NgxWizardService) {}

  ngOnInit(): void {
    this.wizardInit();
  }

  ngOnDestroy(): void {
    this.componentChangesSub?.unsubscribe();
    this.wizardStep?.viewContaianerRef?.clear();
  }

  goToPrevStep(): void {
    if (this.activeStep > 1) {
      const prevStep = this.steps[(--this.activeStep) - 1];
      this.activeStepInfo = prevStep;
      this.updateWizard();
    }
  }

  goToNextStep(): void {
    if (this.activeStep < this.noOfSteps) {
      const nextStep = this.steps[this.activeStep++];
      this.activeStepInfo = nextStep;
      this.updateWizard();
    }
  }

  finishWizard(): void {
    this.finished.emit();
  }

  cancelWizard(): void {
    this.cancelled.emit();
  }

  handleStepperClick(step: IWizardStep): void {
    if (step.id >= this.activeStep) {
      return;
    }

    const newActiveStep = this.steps[step.id - 1];
    this.activeStep = step.id;
    this.activeStepInfo = newActiveStep;
    this.updateWizard();
  }

  /************************* Private Methods **************************************/

  private wizardInit() {
    if (this.steps?.length) {
      this.wizardService.setStepConfiguration(this.steps);
      this.activeStep = 1;
      this.noOfSteps = this.steps.length;
      this.activeStepInfo = this.steps[0];
      this.isFirstStep = true;
      this.isLastStep = false;
      this.loadWizardStep();

      if (this.stepperOptions) {
        this.stepperRight = this.stepperOptions?.position === 'right';
        this.stepperClass += this.stepperRight ? ' positioned-right' : '';
        this.useCustomStepper = !!this.stepperOptions?.custom;
      }
    }
  }

  private loadWizardStep(): void {
    const viewContaianerRef = this.wizardStep.viewContaianerRef;
    viewContaianerRef.clear();
    const componentRef = viewContaianerRef.createComponent<IWizardStepBase>(this.activeStepInfo?.component);
    this.stepComponentInit(componentRef.instance);
  }

  private stepComponentInit(component: IWizardStepBase): void {
    // Initialize component input properties
    component.stepIdx = this.activeStepInfo.id;
    component.stepConfig = this.activeStepInfo;
    component.allStepConfig = this.steps;

    if (component.form) {
      component.form?.patchValue(this.activeStepInfo.data);
      this.componentChangesSub = component.form?.valueChanges.subscribe({
        next: data => this.handleFormValueChanges(data, component)
      });
    }
  }

  private handleFormValueChanges(data: any, component: IWizardStepBase): void {
    if (component.stepConfig && component.form) {
      component.stepConfig.dataValidated = component.form.valid;
      component.stepConfig.data = data;
    }
  }

  private updateWizard(): void {
    this.componentChangesSub?.unsubscribe();
    this.loadWizardStep();
    if (this.activeStep <= 1) {
      this.isFirstStep = true;
      this.isLastStep = false;
    } else if (this.activeStep >= this.noOfSteps) {
      this.isFirstStep = false;
      this.isLastStep = true;
    } else {
      this.isFirstStep = false;
      this.isLastStep = false;
    }
  }
}
