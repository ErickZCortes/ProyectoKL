import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()

export class ItemsService {
    itemChanged = new Subject<Item[]>();
    startedEditing = new Subject<number>();
    constructor(private firestore: AngularFirestore) {
    }
    private items: Item[] = [
        new Item(null, null)
    ]

    addItem(item: Item) {
        this.items.push(item);
        this.itemChanged.next(this.items.slice());
    }
    getItems() {
        return this.items.slice();
    }
    getItem(index: number) {
        return this.items[index];
    }

    updateItem(index: number, item: Item) {
        this.items[index] = item;
        this.itemChanged.next(this.items.slice());
    }
    /*addIngredients(auxItems: Item[]){
      for(const i of auxItems){
          const find = this.items.find(item => item.name == i.name);
            if(find){
              find.amount += i.amount;
            }else{
              this.ingredients.push(i);
            }
    };
    
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    */
    onDelete(index: number) {
        this.items.splice(index, 1);
        this.itemChanged.next(this.items.slice());
    }
}
