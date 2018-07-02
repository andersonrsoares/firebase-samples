import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = "https://testefirebase-6bded.firebaseio.com/bancos.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  facts: Observable<any>;
  constructor(private http: HttpClient) {
     this.facts = this.http.get(URL);
  }
}
