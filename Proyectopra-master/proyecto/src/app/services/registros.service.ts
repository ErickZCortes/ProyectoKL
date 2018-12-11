import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Registro } from '../shared/registro.model';


@Injectable()

export class RegistrosService {

   
    registroChanged = new Subject<Registro[]>();

    constructor(){}
    private registros: Registro[] = []

    addRegistro(registro: Registro) {
        this.registros.push(registro);
        this.registroChanged.next(this.registros.slice());
    }
    getRegistros() {
        return this.registros.slice();
    }

}