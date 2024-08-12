import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsTechnicianProgressComponent } from './list-tickets-technician-progress.component';

describe('ListTicketsTechnicianProgressComponent', () => {
  let component: ListTicketsTechnicianProgressComponent;
  let fixture: ComponentFixture<ListTicketsTechnicianProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTicketsTechnicianProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTicketsTechnicianProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
