import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsPendingComponent } from './list-tickets-pending.component';

describe('ListTicketsPendingComponent', () => {
  let component: ListTicketsPendingComponent;
  let fixture: ComponentFixture<ListTicketsPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTicketsPendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTicketsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
