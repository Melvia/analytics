import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
// import {Chart} from "chart.js";
//import { Chart, registerables } from 'chart.js';
import Chart from 'chart.js/auto';
import * as _ from 'lodash';
import {
  PlannedOperations
} from "@app/planned-operations/planned-operations-table-page/planned-operations-table-page.component";

@Component({
  selector: 'app-planned-operations-chart-page',
  templateUrl: './planned-operations-chart-page.component.html',
  styleUrl: './planned-operations-chart-page.component.scss'
})
export class PlannedOperationsChartPageComponent implements OnInit, AfterViewInit {

  @ViewChild('myChart', { static: true})
  protected myChart: ElementRef<unknown>;

  @Input() plannedOperationsData : PlannedOperations[];

 prepareData(data: PlannedOperations[]) {
   const preparedArray = _.groupBy(data, 'activityPhase');
   console.log("preparedArray", preparedArray);
 }
 ngOnInit() {
  this.prepareData(this.plannedOperationsData);
 }

  ngAfterViewInit(): void {
    const ctx = this.myChart.nativeElement as HTMLCanvasElement;
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
          }
        }
      }
    };

    const ch = new Chart(ctx, {
      type: 'line',
      data: data,
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
