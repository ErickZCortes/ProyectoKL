import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/shared/item.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-list',
  templateUrl: './agregar-list.component.html',
  styleUrls: ['./agregar-list.component.css']
})
export class AgregarListComponent implements OnInit {
  private subscription: Subscription;
  items: Item[];
  constructor(private itemsService: ItemsService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
    this.subscription = this.itemsService.itemChanged.subscribe(
      ((items: Item[]) => {
        this.items = items;
      })
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index: number){
    this.itemsService.startedEditing.next(index);
  }
}