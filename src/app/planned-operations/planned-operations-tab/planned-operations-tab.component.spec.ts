import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedOperationsTabComponent } from './planned-operations-tab.component';

describe('PlannedOperationsTabComponent', () => {
  let component: PlannedOperationsTabComponent;
  let fixture: ComponentFixture<PlannedOperationsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannedOperationsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannedOperationsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
