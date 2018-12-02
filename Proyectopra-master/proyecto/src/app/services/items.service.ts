import { Subject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Item } from '../shared/item.model';
import { Injectable } from '@angular/core';

@Injectable()

export class ItemsService {
    itemsChanged = new Subject<Item[]>();
    itemList: AngularFireList<any>;
    selectedItem: Item = new Item();

    constructor(private firebase: AngularFireDatabase) { }

    getItems() {
        this.itemList = this.firebase.list('items');
    }

    addItemsToList(item: Item) {
        this.itemList.push({
            quantity: item.quantity
        });
    }

    updateItem(item: Item) {
        this.itemList.update(item.iditem, {
            quantity: item.quantity
        });
    }

    deleteItem(iditem: string) {
        this.itemList.remove(iditem);

    }
}
