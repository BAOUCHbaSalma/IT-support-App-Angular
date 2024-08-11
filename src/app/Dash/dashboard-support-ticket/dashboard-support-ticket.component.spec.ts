import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSupportTicketComponent } from './dashboard-support-ticket.component';

describe('DashboardSupportTicketComponent', () => {
  let component: DashboardSupportTicketComponent;
  let fixture: ComponentFixture<DashboardSupportTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardSupportTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSupportTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
