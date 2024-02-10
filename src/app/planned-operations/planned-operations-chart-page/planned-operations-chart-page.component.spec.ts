import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedOperationsChartPageComponent } from './planned-operations-chart-page.component';

describe('PlannedOperationsChartPageComponent', () => {
  let component: PlannedOperationsChartPageComponent;
  let fixture: ComponentFixture<PlannedOperationsChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannedOperationsChartPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannedOperationsChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
