import { Component, OnInit, Input } from '@angular/core';
import { Registro } from 'src/app/shared/registro.model';

@Component({
  selector: 'app-agregar-finish',
  templateUrl: './agregar-finish.component.html',
  styleUrls: ['./agregar-finish.component.css']
})
export class AgregarFinishComponent implements OnInit {
  @Input() registro: Registro;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
