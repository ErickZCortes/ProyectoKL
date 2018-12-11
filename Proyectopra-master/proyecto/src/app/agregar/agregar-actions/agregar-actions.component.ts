import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/shared/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Registro } from 'src/app/shared/registro.model';
import { registerContentQuery } from '@angular/core/src/render3/instructions';
import { RegistrosService } from 'src/app/services/registros.service';
@Component({
  selector: 'app-agregar-actions',
  templateUrl: './agregar-actions.component.html',
  styleUrls: ['./agregar-actions.component.css']
})
export class AgregarActionsComponent implements OnInit {

  private subscription: Subscription;
  editedItem: Item;
  @ViewChild('itemForm') slForm: NgForm;
  editMode = false;
  indexEditedItem: number;
  public quantity:number = null;
  public result: number = 0;
  itemForm : FormGroup;
  registro:Registro[];
  public producto : string = '';
  constructor(private registroService: RegistrosService, private itemService : ItemsService, private ruoter: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.itemService.startedEditing.subscribe((index: number) => {
      this.indexEditedItem = index;
      this.editedItem = this.itemService.getItem(index);
      this.editMode = true;
      this.slForm.setValue({
        quantity: this.editedItem.quantity
      })
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    //const name = this.nameInputRef.nativeElement.value;
    //const amount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    this.producto = value.product;
    console.log( this.result= this.result + value.quantity);
    const newItem = new Item(value.quantity);
    const aditem =this.itemService.addItem(newItem);
    this.editMode = false;
    this.clear();
  }
  onDelete() {
    const quantity = this.itemService.getItem(this.indexEditedItem).quantity;
    this.result = this.result - quantity;
    this.itemService.onDelete(this.indexEditedItem);
    this.clear();
  }
  onFinish(){
    const resulting= new Registro(this.producto, this.result);
     this.registroService.addRegistro(resulting);
    console.log(this.registroService.getRegistros());
    //console.log(resulting); 
    this.ruoter.navigate(['resultado'], {relativeTo: this.route});
  }
  clear() {
    this.slForm.reset(); 
  }
}
  