import { Component, OnInit } from '@angular/core';
import { SugerenciasService } from 'src/app/services/sugerencias.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  constructor(private sugerenciasService: SugerenciasService, private firestore: AngularFirestore ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      this.sugerenciasService.sugerencia = {
        idsug: null,
        nombre: '',
        email: '',
        telefono: '',
        comentario: '',
      };
    }
  }
  onSubmit(form: NgForm) {
    const data = form.value;
    this.firestore.collection('Sugerencias').add(data);
    this.resetForm(form);
  }
}
