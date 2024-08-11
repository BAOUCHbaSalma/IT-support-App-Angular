import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTicketsComponent } from './list-all-tickets.component';

describe('ListAllTicketsComponent', () => {
  let component: ListAllTicketsComponent;
  let fixture: ComponentFixture<ListAllTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
