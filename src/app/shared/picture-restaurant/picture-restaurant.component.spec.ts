import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureRestaurantComponent } from './picture-restaurant.component';

describe('PictureRestaurantComponent', () => {
  let component: PictureRestaurantComponent;
  let fixture: ComponentFixture<PictureRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
