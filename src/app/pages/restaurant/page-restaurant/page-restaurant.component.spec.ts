import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRestaurantComponent } from './page-restaurant.component';

describe('PageRestaurantComponent', () => {
  let component: PageRestaurantComponent;
  let fixture: ComponentFixture<PageRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
