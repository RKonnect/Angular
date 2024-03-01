import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommonInfosComponent } from './form.common-infos.component';

describe('FormCommonInfosComponent', () => {
  let component: FormCommonInfosComponent;
  let fixture: ComponentFixture<FormCommonInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCommonInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCommonInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
