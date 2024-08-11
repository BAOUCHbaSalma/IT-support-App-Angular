import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFailureComponent } from './dashboard-failure.component';

describe('DashboardFailureComponent', () => {
  let component: DashboardFailureComponent;
  let fixture: ComponentFixture<DashboardFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardFailureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
