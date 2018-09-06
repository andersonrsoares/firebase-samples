import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

<<<<<<< HEAD
const URL = 'https://testefirebase-6bded.firebaseio.com/messages.json'
=======
const URL = "https://testefirebase-6bded.firebaseio.com/bancos.json";
>>>>>>> 78ac98fe730eeb0ddcea0e9513aaf2ff65949703

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
   title = 'app';
   facts:Observable<any>;
   constructor(private http: HttpClient){
      this.facts = this.http.get(URL);
   }
=======
  title = 'app';

  facts: Observable<any>;
  constructor(private http: HttpClient) {
     this.facts = this.http.get(URL);
  }
>>>>>>> 78ac98fe730eeb0ddcea0e9513aaf2ff65949703
}
