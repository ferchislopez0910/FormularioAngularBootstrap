import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component implements OnInit {
  @Output() sendDataPaso3Next = new EventEmitter<any>();
  formValidate!: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  onClickPaso3Next(dataPaso1:any): void {
    console.log("hijo");
    this.sendDataPaso3Next.emit(dataPaso1);
  }

  onSubmit(f: NgForm) {
    if(!f.valid){
      this.formValidate = false;
    } else{
      this.onClickPaso3Next(f.value);
      this.formValidate = true;
    }
  }
}
