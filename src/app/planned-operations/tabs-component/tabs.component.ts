import {Component} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {PlannedOperationsModule} from "@app/planned-operations/planned-operations.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  standalone: true,
  imports: [MatTabsModule, PlannedOperationsModule, FormsModule,
    //===============================
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
})
export class TabsComponent {

}
