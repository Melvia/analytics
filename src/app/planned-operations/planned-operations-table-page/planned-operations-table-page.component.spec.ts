import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedOperationsTablePageComponent } from './planned-operations-table-page.component';

describe('PlannedOperationsTablePageComponent', () => {
  let component: PlannedOperationsTablePageComponent;
  let fixture: ComponentFixture<PlannedOperationsTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannedOperationsTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannedOperationsTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
