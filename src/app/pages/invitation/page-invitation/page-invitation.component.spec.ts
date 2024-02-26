import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInvitationComponent } from './page-invitation.component';

describe('PageInvitationComponent', () => {
  let component: PageInvitationComponent;
  let fixture: ComponentFixture<PageInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInvitationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
