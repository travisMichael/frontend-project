import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'event-app';
  data = null;

  constructor(private http:HttpClient) {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("hello");
    // let result: any = this.http
    //   .get("http://localhost:8080/events")
    //   .subscribe(response => this.data = (<any>response)._embedded.events);
    // console.log(this.data);
  }
}
