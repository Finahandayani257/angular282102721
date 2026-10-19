import { AfterViewInit, Component } from '@angular/core';

declare const Chart: any;
declare const jsVectorMap: any;

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements AfterViewInit {
  ngAfterViewInit(): void {
    const { areaFill } = (globalThis as any).lteChartTheme;

    // Grafik garis Sales Value
    new Chart(document.querySelector('#revenue-chart'), {
      type: 'line',
      data: {
        labels: ["Jan '23", "Feb '23", "Mar '23", "Apr '23", "May '23", "Jun '23", "Jul '23"],
        datasets: [
          {
            label: 'Digital Goods',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: '#0d6efd',
            backgroundColor: areaFill('#0d6efd'),
            pointBackgroundColor: '#0d6efd',
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Electronics',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#20c997',
            backgroundColor: areaFill('#20c997'),
            pointBackgroundColor: '#20c997',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: ([item]: any) =>
                `${new Date(2023, item.dataIndex).toLocaleString('en', { month: 'long' })} 2023`,
            },
          },
        },
        scales: { y: { beginAtZero: true } },
      },
    });

    // Peta dunia
    new jsVectorMap({ selector: '#world-map', map: 'world' });

    // Sparkline
    const sparkline = (selector: string, data: number[]) =>
      new Chart(document.querySelector(selector), {
        type: 'line',
        data: {
          labels: data.map((_, index) => index + 1),
          datasets: [
            {
              data,
              borderColor: '#DCE6EC',
              backgroundColor: 'rgba(220, 230, 236, 0.3)',
              pointBackgroundColor: '#DCE6EC',
              fill: true,
            },
          ],
        },
        options: {
          layout: { padding: { top: 2 } },
          plugins: {
            legend: { display: false },
            tooltip: { displayColors: false, callbacks: { title: () => '' } },
          },
          scales: { x: { display: false }, y: { display: false, min: 0 } },
        },
      });

    sparkline('#sparkline-1', [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]);
    sparkline('#sparkline-2', [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]);
    sparkline('#sparkline-3', [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]);
  }
}