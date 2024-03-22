import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterInfoComponent } from './page-register-info.component';

describe('PageRegisterInfoComponent', () => {
  let component: PageRegisterInfoComponent;
  let fixture: ComponentFixture<PageRegisterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRegisterInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRegisterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
