import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthService {

    constructor(public afAuth: AngularFireAuth) { }

    registerUser(email: string, pass: string) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData),
                err => reject(err));
        });
    }

    loginEmailUser(email: string, pass: string) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData),
                    err => reject(err));
        });
    }
    loginFacebookUser() {
        return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    }
    loginGoogleUser() {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logoutUser() {
        return this.afAuth.auth.signOut();
    }

    isAuth() {
        // tslint:disable-next-line:no-shadowed-variable
        return this.afAuth.authState.pipe(map(auth => auth));
    }
}
