import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

  // tslint:disable-next-line:no-inferrable-types
  public app_name: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }
}
