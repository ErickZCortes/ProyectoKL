import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()

export class ItemsService {
    item: Item;
    constructor(private firestore: AngularFirestore) { }

    getItems(){
        return this.firestore.collection('Items').snapshotChanges();

    }
    }
