import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsProgressComponent } from './list-tickets-progress.component';

describe('ListTicketsProgressComponent', () => {
  let component: ListTicketsProgressComponent;
  let fixture: ComponentFixture<ListTicketsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTicketsProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTicketsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
