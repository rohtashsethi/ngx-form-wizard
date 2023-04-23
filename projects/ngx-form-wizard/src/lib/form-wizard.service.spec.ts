import { TestBed } from '@angular/core/testing';

import { FormWizardService } from './form-wizard.service';

describe('FormWizardService', () => {
  let service: FormWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
