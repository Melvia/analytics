import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-planned-operations-chart-page',
  templateUrl: './planned-operations-chart-page.component.html',
  styleUrl: './planned-operations-chart-page.component.scss'
})
export class PlannedOperationsChartPageComponent implements OnInit {

  @ViewChild('myChart', { static: true})
  protected myChart: ElementRef<unknown>;
 ngOnInit() {
   const ctx = this.myChart.nativeElement as HTMLCanvasElement;

   const ch = new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       datasets: [{
         label: '# of Votes',
         data: [12, 19, 3, 5, 2, 3],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
 }


}
