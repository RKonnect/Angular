import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsLoadingComponent } from './dots-loading.component';

describe('DotsLoadingComponent', () => {
  let component: DotsLoadingComponent;
  let fixture: ComponentFixture<DotsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotsLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
