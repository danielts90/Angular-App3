import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    let config = {
      apiKey: 'AIzaSyAKxq31pXGFQSpWLekGDmFxe9bZVxoNKxI',
      authDomain: 'jta-instagram-clone-2a079.firebaseapp.com',
      databaseURL: 'https://jta-instagram-clone-2a079.firebaseio.com',
      projectId: 'jta-instagram-clone-2a079',
      storageBucket: 'jta-instagram-clone-2a079.appspot.com',
      messagingSenderId: '858792472096'
    };

    firebase.initializeApp(config);
  }
}
