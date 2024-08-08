import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFailureComponent } from './update-failure.component';

describe('UpdateFailureComponent', () => {
  let component: UpdateFailureComponent;
  let fixture: ComponentFixture<UpdateFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateFailureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
