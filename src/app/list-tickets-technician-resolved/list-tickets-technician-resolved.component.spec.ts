import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsTechnicianResolvedComponent } from './list-tickets-technician-resolved.component';

describe('ListTicketsTechnicianResolvedComponent', () => {
  let component: ListTicketsTechnicianResolvedComponent;
  let fixture: ComponentFixture<ListTicketsTechnicianResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTicketsTechnicianResolvedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTicketsTechnicianResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
