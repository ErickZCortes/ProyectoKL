import { Component, OnInit, Input } from '@angular/core';
import { Registro } from 'src/app/shared/registro.model';
import { RegistrosService } from 'src/app/services/registros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-finish',
  templateUrl: './agregar-finish.component.html',
  styleUrls: ['./agregar-finish.component.css']
})
export class AgregarFinishComponent implements OnInit {
  registros: Registro[];
  private subscription: Subscription;
  constructor(private registroService : RegistrosService) { }

  ngOnInit() {
    this.registros = this.registroService.getRegistros();
    this.subscription = this.registroService.registroChanged.subscribe((event)=>{
      this.registros = this.registroService.getRegistros();
    })
  }

}
