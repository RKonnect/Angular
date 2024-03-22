import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLaunchComponent } from './page-launch.component';

describe('PageLaunchComponent', () => {
  let component: PageLaunchComponent;
  let fixture: ComponentFixture<PageLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
