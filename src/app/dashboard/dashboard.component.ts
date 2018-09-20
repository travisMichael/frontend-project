import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FilterPipe } from './pipe/filter-by';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'event-app';
  data;
  term: string = null;

  constructor(private http: HttpClient) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('hello');
    this.http.get('http://localhost:8080/events')
      .subscribe(response => this.data = (<any>response)._embedded.events);
  }

  onChange(toFilterOn: string) {
    this.term = toFilterOn;
    console.log(toFilterOn);
  }
}
