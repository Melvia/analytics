import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabsComponent {

}
