import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedOperationsTabsComponent } from './planned-operations-tabs.component';

describe('PlannedOperationsTabsComponent', () => {
  let component: PlannedOperationsTabsComponent;
  let fixture: ComponentFixture<PlannedOperationsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannedOperationsTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannedOperationsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
