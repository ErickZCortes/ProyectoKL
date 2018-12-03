import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/shared/item.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-list',
  templateUrl: './agregar-list.component.html',
  styleUrls: ['./agregar-list.component.css']
})
export class AgregarListComponent implements OnInit {

  list: Item[];
  constructor(private itemsService: ItemsService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(actionArray =>{
      this.list = actionArray.map(item => {
        return {
          iditem: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Item;
      })
    });
  }

  onEdit(emp: Item){
    this.itemsService.item = Object.assign({},emp);
  }
  onDelete(iditem: string){
    if(confirm("¿Estás seguro que deseas eliminarlo?")){
      this.firestore.doc('Items/'+iditem).delete();
    }
  }
}
