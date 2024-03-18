import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCredentialLoginComponent } from './form-credential-login.component';

describe('FormCredentialLoginComponent', () => {
  let component: FormCredentialLoginComponent;
  let fixture: ComponentFixture<FormCredentialLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCredentialLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCredentialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
