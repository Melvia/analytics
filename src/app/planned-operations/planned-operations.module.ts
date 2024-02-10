import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  PlannedOperationsChartPageComponent
} from './planned-operations-chart-page/planned-operations-chart-page.component';
import {
  PlannedOperationsTablePageComponent
} from './planned-operations-table-page/planned-operations-table-page.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {PlannedOperationsTabsComponent} from './planned-operations-tabs/planned-operations-tabs.component';
import {PlannedOperationsTabComponent} from './planned-operations-tab/planned-operations-tab.component';


@NgModule({
  declarations: [
    PlannedOperationsChartPageComponent,
    PlannedOperationsTablePageComponent,
    PlannedOperationsTabsComponent,
    PlannedOperationsTabComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatTabGroup,
    MatTab
  ]
})
export class PlannedOperationsModule { }
