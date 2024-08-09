import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsUserComponent } from './list-tickets-user.component';

describe('ListTicketsUserComponent', () => {
  let component: ListTicketsUserComponent;
  let fixture: ComponentFixture<ListTicketsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTicketsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTicketsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
