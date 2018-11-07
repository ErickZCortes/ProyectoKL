import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private ruoter: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  /*onAccept(){
    this.ruoter.navigate(['new'], {relativeTo: this.route});
  }*/
}
