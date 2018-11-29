import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { NgForm } from '@angular/forms';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.getItems();
    this.resetForm();
  }

  onSubmit(itemForm : NgForm){
    this.itemService.addItemsToList(itemForm.value);
    this.resetForm(itemForm);
  }
  resetForm(itemForm?: NgForm){
    if(itemForm !=null){
      itemForm.reset();
      this.itemService.selectedItem = new Item();
    }
  }
}
