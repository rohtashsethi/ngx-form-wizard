<h1 align="center">
  Angular Form Wizard
</h1>

<h4 align="center">
A minimal customizable angular library for generating n-step form wizard.
</h4>

<br>

<p align="center">
  <a>
    <img src="https://forthebadge.com/images/badges/made-with-typescript.svg" />
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/open-source.svg" />
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/powered-by-coffee.svg" />
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#demo">Demo</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>


## Key Features

- N-step Configuration Support
- Dynamic Component creation of steps
- Step Level Data Validation
- Step Level Data Caching
- Default stepper layout
- Custom stepper support using content projection
- Available stepper positions - top and right
- Navigation support in stepper


## Installation

```
npm i ngx-form-wizard
```


## How To Use

First, import the FormWizardModule to your module:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormWizardModule } from 'ngx-form-wizard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then use the FormWizardComponent in your HTML like below:

```js
<ngx-form-wizard
  [steps]="steps"
  [stepperOptions]="stepperOptions"
  (finished)="onFinish()"
  (cancelled)="onCancel()">
</ngx-form-wizard>
```

And declare the steps and stepper options in your components like:

```js
import { Component } from '@angular/core';
import { IStepperOptions, IWizardStep, FormWizardService } from 'ngx-form-wizard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  steps: IWizardStep[] = [
    {
      id: 1,
      title: 'Personal Info',
      description: 'Personal Description',
      data: null,
      component: Step1Component
    },
    {
      id: 2,
      title: 'Education',
      description: 'Eduction Description',
      data: null,
      component: Step2Component
    },
    {
      id: 3,
      title: 'Work Experience',
      description: 'Work Description',
      data: null,
      component: Step3Component
    },
    {
      id: 4,
      title: 'Review',
      description: 'Review Description',
      data: null,
      component: Step4Component
    }
  ];

  stepperOptions: IStepperOptions = {
    custom: true,
    position: 'right'
  };

  constructor(private wizardService: FormWizardService) {}

  onFinish(): void {
    alert('Wizard Finished!!');
  }

  onCancel(): void {
    alert('Wizard Cancelled!!');
  } 
}
```


## Demo

https://ngx-form-wizard-demo.stackblitz.io


## Support

<a href="https://www.buymeacoffee.com/rohtashsethi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


## License

MIT
