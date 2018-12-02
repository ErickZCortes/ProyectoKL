import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  public email: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public password: string = '';
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/principal']);
      }).catch(err => console.log('err', err.message));
  }
}
