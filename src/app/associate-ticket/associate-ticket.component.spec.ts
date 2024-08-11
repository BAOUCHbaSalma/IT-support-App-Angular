import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateTicketComponent } from './associate-ticket.component';

describe('AssociateTicketComponent', () => {
  let component: AssociateTicketComponent;
  let fixture: ComponentFixture<AssociateTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociateTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
