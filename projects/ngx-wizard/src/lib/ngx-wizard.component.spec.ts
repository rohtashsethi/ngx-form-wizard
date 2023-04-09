import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWizardComponent } from './ngx-wizard.component';

describe('NgxWizardComponent', () => {
  let component: NgxWizardComponent;
  let fixture: ComponentFixture<NgxWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
