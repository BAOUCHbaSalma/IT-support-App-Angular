import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFailureHistoryComponent } from './list-failure-history.component';

describe('ListFailureHistoryComponent', () => {
  let component: ListFailureHistoryComponent;
  let fixture: ComponentFixture<ListFailureHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFailureHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFailureHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
