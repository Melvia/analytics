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
import {MatTableModule} from "@angular/material/table";
import {MatFormField} from "@angular/material/form-field";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInput} from "@angular/material/input";
import {DemoMaterialModule} from "@app/material-module";



@NgModule({
  declarations: [
    PlannedOperationsChartPageComponent,
    PlannedOperationsTablePageComponent,
    PlannedOperationsTabsComponent,
    PlannedOperationsTabComponent,
  ],
  exports: [
    PlannedOperationsChartPageComponent,
    PlannedOperationsTablePageComponent
  ],
  imports: [
    CommonModule,
    MatTabGroup,
    MatTab,
    MatTableModule,
    MatFormField,
    MatCard,
    MatIcon,
    MatProgressSpinner,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInput,
    DemoMaterialModule,

  ]
})
export class PlannedOperationsModule { }
