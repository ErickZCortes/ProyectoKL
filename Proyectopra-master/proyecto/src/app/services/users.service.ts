import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from 'rxjs/operators';
import { User } from "../shared/user.model";
import { AuthService } from "./auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
@Injectable()

export class UsersService {
    constructor(private afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) { }

    onAddUser(user: User) {
        this.afDatabase.list('User').push(user)
            .then((result: any) => {
                console.log(result.key);
            })
    }
    onUpdateUser(idUser: string, user: User) {
        this.afDatabase.list('User').update(idUser, user)
            .catch((error: any) => {
                console.error(error);
            });
    }
    getUser(idUser: string){
        this.afAuth.auth.currentUser;
        const user =  this.afAuth.auth.currentUser;
        if (user) {
            return user;
        } else {
            return null;
        }
    }
}