import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  title = 'event-app';
  history = [];
  counter = 0;
  name = '';
  description = '';

  constructor(private http: HttpClient) {
    console.log('constructor');
  }

  submit() {
    console.log('submitted');
    const body = {
      name: this.name,
      description: this.description
    };
    this.http.post('http://localhost:8080/events', body).subscribe(r => console.log(r));
    console.log('done');
    this.history.push(this.counter);
    this.counter++;
  }

  onEnterName(value) {
    console.log(value);
    this.name = value;
  }
  onEnterDescription(value) {
    console.log(value);
    this.description = value;
  }
}
