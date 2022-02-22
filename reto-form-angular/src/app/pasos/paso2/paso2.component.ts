import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit {
  @Output() sendDataPaso2Next = new EventEmitter<any>();
  formValidate!: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  onClickPaso2Next(dataPaso1:any): void {
    console.log("hijo");
    this.sendDataPaso2Next.emit(dataPaso1);
  }

  onSubmit(f: NgForm) {
    if(!f.valid){
      this.formValidate = false;
    } else{
      this.onClickPaso2Next(f.value);
      this.formValidate = true;
    }
  }

}