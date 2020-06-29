import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public mainService: MainService) { }
  // tslint:disable-next-line: member-ordering
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
    }
   }
  };
  // tslint:disable-next-line: member-ordering
  public barChartLabels: Label[] = ['01/06/2020', '02/06/2020', '03/06/2020', '04/06/2020', '05/06/2020', '06/06/2020', '07/06/2020',
  '08/06/2020', '09/06/2020', '10/06/2020', '11/06/2020', '12/06/2020', '13/06/2020', '14/06/2020', '15/06/2020', '16/06/2020',
  '17/06/2020', '18/06/2020', '19/06/2020', '20/06/2020', '21/06/2020', '22/06/2020', '23/06/2020', '24/06/2020', '25/06/2020',
  '26/06/2020', '27/06/2020', '28/06/2020', '29/06/2020', '30/06/2020'];
  // tslint:disable-next-line: member-ordering
  public barChartType: ChartType = 'bar';
  // tslint:disable-next-line: member-ordering
  public barChartLegend = true;
  // tslint:disable-next-line: member-ordering
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
   { data: [36, 59, 80, 81, 56, 55, 45, 26, 79, 34, 81, 65, 45, 70, 43, 29, 86, 61, 46, 75, 35, 67, 39, 24, 51, 65, 85, 40, 65, 50],
     label: 'ilość zamówień' }
  ];

  ngOnInit(): void {
    this.mainService.getOrders();
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
  }
  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      45,
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      34,
      Math.round(Math.random() * 100),
      65,
      Math.round(Math.random() * 100),
      70,
      Math.round(Math.random() * 100),
      29,
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      46,
      Math.round(Math.random() * 100),
      35,
      Math.round(Math.random() * 100),
      39,
      24,
      Math.round(Math.random() * 100),
      65,
      Math.round(Math.random() * 100),
      40,
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)];
    this.barChartData[0].data = data;
  }

}
