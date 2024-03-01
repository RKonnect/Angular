import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvatarComponent } from './form.avatar.component';

describe('FormAvatarComponent', () => {
  let component: FormAvatarComponent;
  let fixture: ComponentFixture<FormAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
