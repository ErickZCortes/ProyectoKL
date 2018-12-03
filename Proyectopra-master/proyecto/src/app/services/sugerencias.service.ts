import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sugerencia } from '../shared/sugerencia.model';

@Injectable({
    providedIn: 'root'
})

export class SugerenciasService {
    sugerencia: Sugerencia;
    constructor(private firestore: AngularFirestore) { }
}
