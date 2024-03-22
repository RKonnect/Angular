import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecentMeetingComponent } from './page-recent-meeting.component';

describe('PageRecentMeetingComponent', () => {
  let component: PageRecentMeetingComponent;
  let fixture: ComponentFixture<PageRecentMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRecentMeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRecentMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
