import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/shared/item.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Registro } from 'src/app/shared/registro.model';
import { RegistrosService } from 'src/app/services/registros.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-agregar-list',
  templateUrl: './agregar-list.component.html',
  styleUrls: ['./agregar-list.component.css']
})
export class AgregarListComponent implements OnInit {
  private subscription: Subscription;
  items: Item[];
  registro: Registro[];
  constructor(private registroService : RegistrosService, private itemsService: ItemsService, private firestore: AngularFirestore,private route: ActivatedRoute,private router: Router) { }
  id : number;
  ngOnInit() {
    this.items = this.itemsService.getItems();
    this.subscription = this.itemsService.itemChanged.subscribe(
      ((items: Item[]) => {
        this.items = items;
      })
    );
    this.registro = this.registroService.getRegistros();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index: number){
    this.itemsService.startedEditing.next(index);
  }
}