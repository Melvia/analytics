import {Component, inject, OnInit} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {PlannedOperationsModule} from "@app/planned-operations/planned-operations.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {Observable} from "rxjs";
import {
  PlannedOperations
} from "@app/planned-operations/planned-operations-table-page/planned-operations-table-page.component";

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
export class TabsComponent implements OnInit {

  private http = inject(HttpClient);
  plannedOperations: PlannedOperations[];
  fetchData(): Observable<PlannedOperations[]> {
    return this.http.get<PlannedOperations[]>('assets/6BUVp.json');
  }

  ngOnInit(): void {
    this.fetchData().subscribe(data=> this.plannedOperations = data);
  }

}
