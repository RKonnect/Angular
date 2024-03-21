import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIconComponent } from './food-icon.component';

describe('FoodIconComponent', () => {
  let component: FoodIconComponent;
  let fixture: ComponentFixture<FoodIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
