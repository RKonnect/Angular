import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserTagsComponent } from './form.user-tags.component';

describe('FormUserTagsComponent', () => {
  let component: FormUserTagsComponent;
  let fixture: ComponentFixture<FormUserTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUserTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormUserTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
