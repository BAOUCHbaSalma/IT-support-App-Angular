import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsResolvedComponent } from './list-tickets-resolved.component';

describe('ListTicketsResolvedComponent', () => {
  let component: ListTicketsResolvedComponent;
  let fixture: ComponentFixture<ListTicketsResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTicketsResolvedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTicketsResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
