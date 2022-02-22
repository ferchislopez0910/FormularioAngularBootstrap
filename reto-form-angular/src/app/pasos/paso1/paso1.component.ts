import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { tap } from 'rxjs/operators';
import { Pais } from 'src/app/services/interfaces/pais.interface';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})
export class Paso1Component implements OnInit {
  @Output() sendDataPaso1Next = new EventEmitter<any>();
  paises!: Pais[];
  inputPais!: string;
  formValidate!: boolean;

  constructor(private paisSvc: PaisesService) {
   }

  ngOnInit(): void {
    this.paisSvc.getPaises().pipe(
      tap( (objPaises: Pais[]) => this.paises = objPaises)
    ).subscribe();
  }

  onClickPaso1Next(dataPaso1:any): void {
    console.log("hijo");
    this.sendDataPaso1Next.emit(dataPaso1);
  }

  onSubmit(f: NgForm) {
    if(!f.valid){
      this.formValidate = false;
    } else{
      this.onClickPaso1Next(f.value);
      this.formValidate = true;
    }
  }

}
