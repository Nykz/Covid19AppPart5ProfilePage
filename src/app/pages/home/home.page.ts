import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  segmentValue = '1';
  requests: any[] = [];
  donors: any[] = [];
  lineChart: any;
  newHeight = 0;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    this.donors = [
      { id: 1, name: 'Noriko Rusk', age: 25, address: 'Seattle, WA', gender: 'Female', blood_group: 'B-', photo: 'assets/imgs/4.png', distance: 0.5, phone: '9999900000', email: 'abc@xyz.com' },
      { id: 2, name: 'Carl Sweat', age: 22, address: 'Miami, FL', gender: 'Male', blood_group: 'A+', photo: 'assets/imgs/2.png', distance: 2, phone: '9999900001', email: 'abc1@xyz.com' },
      { id: 3, name: 'Phoebe Jackson', age: 27, address: 'Stationsstraat 185 9472 Iddergem', gender: 'Female', blood_group: 'O-', photo: 'assets/imgs/3.png', distance: 6, phone: '9999900002', email: 'abc2@xyz.com' },
      { id: 4, name: 'Bajrang Bali', age: 35, address: 'Hauz Khas, Delhi', gender: 'Male', blood_group: 'AB-', photo: 'assets/imgs/1.png', distance: 10, phone: '9999900003', email: 'abc3@xyz.com' },
      { id: 5, name: 'Lan T\'ang', age: 30, address: 'Wuhan, China', gender: 'Male', blood_group: 'O+', photo: 'assets/imgs/2.png', distance: 12, phone: '9999900004', email: 'abc4@xyz.com' },
      { id: 6, name: 'S. Dilshan', age: 45, address: 'Kandy, Sri Lanka', gender: 'Male', blood_group: 'O-', photo: 'assets/imgs/2.png', distance: 14.5, phone: '9999900005', email: 'ab5@xyz.com' },
      { id: 7, name: 'Amy D\'Souza', age: 20, address: 'India', gender: 'Female', blood_group: 'A-', photo: 'assets/imgs/3.png', distance: 16.7, phone: '9999900006', email: 'abc6@xyz.com' }
    ];

    this.requests = [
      { id: 1, name: 'Jessika Lynch', age: 20, address: 'Wuhan, China', gender: 'Female', blood_group: 'B+', photo: 'assets/imgs/3.png', distance: 1, phone: '9999900010', email: 'xyz1@xyz.com' },
      { id: 2, name: 'Chris Manhattan', age: 29, address: 'Sydney, Australia', gender: 'Male', blood_group: 'O+', photo: 'assets/imgs/2.png', distance: 1.5, phone: '9999900020', email: 'xyz2@xyz.com' },
      { id: 3, name: 'Sanya Iyer', age: 45, address: 'Bengaluru', gender: 'Male', blood_group: 'AB+', photo: 'assets/imgs/4.png', distance: 3, phone: '9999900030', email: 'xyz3@xyz.com' },
      { id: 4, name: 'Jinpin', age: 40, address: 'Wuhan, China', gender: 'Male', blood_group: 'O+', photo: 'assets/imgs/1.png', distance: 8, phone: '9999900040', email: 'xyz4@xyz.com' },
      { id: 5, name: 'Mahavir Singh', age: 35, address: 'South Extension II, Delhi', gender: 'Male', blood_group: 'O-', photo: 'assets/imgs/2.png', distance: 15, phone: '9999900050', email: 'xyz5@xyz.com' },
      { id: 6, name: 'Lanee T\'ang', age: 20, address: 'Beijing, China', gender: 'Female', blood_group: 'B-', photo: 'assets/imgs/3.png', distance: 20, phone: '9999900060', email: 'xyz6@xyz.com' }
    ];
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.lineChartMethod();
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Mar\'21', 'Jun\'21'],
        datasets: [
          {
            label: 'COVID RATE',
            fill: 'false',
            backgroundColor: '#fff',
            borderColor: '#E31007',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#fff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#E31007',
            pointHoverBorderColor: '#E31007',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 10, 25, 30, 25, 15, 10, 20, 18, 5, 2, 15, 15, 35],
            spanGaps: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false
            }
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false
            }
          }
        }
      }
    });
  }

  scroll(event) {
    const value = event.detail.scrollTop;
    console.log(value, this.newHeight);
    if(value > 40) {
      this.newHeight += 5; // this.newHeight = this.newHeight + 5
    } else {
      this.newHeight = 0;
    }
    if(value > 180 && this.newHeight <= 65) {
      this.newHeight += 50;
    }
  }

}
