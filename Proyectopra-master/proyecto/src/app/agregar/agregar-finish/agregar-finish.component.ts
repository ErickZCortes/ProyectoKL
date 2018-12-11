import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Registro } from 'src/app/shared/registro.model';
import { RegistrosService } from 'src/app/services/registros.service';
import { Subscription } from 'rxjs';
import * as jsPDF from 'jspdf';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-finish',
  templateUrl: './agregar-finish.component.html',
  styleUrls: ['./agregar-finish.component.css']
})
export class AgregarFinishComponent implements OnInit {
  registros: Registro[];
  private subscription: Subscription;
  @ViewChild('contenido') contenido : ElementRef;
  constructor(private registroService : RegistrosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.registros = this.registroService.getRegistros();
    this.subscription = this.registroService.registroChanged.subscribe((event)=>{
      this.registros = this.registroService.getRegistros();
    })
  }

  downloadPDF(){
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor':function(element, render){
        return true;
      }
    };

    let content = this.contenido.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width':190,
      'elementHandlers':specialElementHandlers
    });

    doc.save('MKCaptureREsult.pdf');

//    this.router.navigate(['principal'], {relativeTo: this.route});

  }
}
