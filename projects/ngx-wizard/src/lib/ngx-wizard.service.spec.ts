import { TestBed } from '@angular/core/testing';

import { NgxWizardService } from './ngx-wizard.service';

describe('NgxWizardService', () => {
  let service: NgxWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
