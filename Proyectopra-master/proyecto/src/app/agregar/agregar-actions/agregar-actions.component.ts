import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-actions',
  templateUrl: './agregar-actions.component.html',
  styleUrls: ['./agregar-actions.component.css']
})
export class AgregarActionsComponent implements OnInit {

  constructor(private itemService: ItemsService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if(form!= null)
    form.resetForm();
    this.itemService.item = {
      iditem: null,
      idUser: '',
      quantity: null
    }
  }

  onSubmit(form: NgForm){
    let data = Object.assign({},form.value);
    delete data.iditem
    if(form.value.iditem == null){
      this.firestore.collection('Items').add(data);
    }
    this.firestore.doc('Items/' + form.value.iditem).update(data);
    this.resetForm(form);
  }
}
