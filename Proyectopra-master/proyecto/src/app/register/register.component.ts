import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../shared/user.model';
import { AngularFireAuth } from '@angular/fire/auth';

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
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  onAddUser(form: NgForm) {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/principal']);
        
      }).catch(err => console.log('err', err.message));
      
  }
}
