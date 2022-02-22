import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  WizardComponent } from 'angular-archwizard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reto-form-angular';
  dataForm = new Map<string,any>();
  formComplete: boolean= false;

  @ViewChild(WizardComponent)
  public wizard!: WizardComponent;

  clicNextPaso1(dataPaso1: any): void{
    console.log("clic paso 1");
    //console.log(dataPaso1)
    this.dataForm.set("Paso1",dataPaso1);
    this.wizard.goToNextStep();
  }

  clicNextPaso2(dataPaso2: any): void{
    console.log("clic paso 2");
    //console.log(dataPaso2)
    this.dataForm.set("Paso2",dataPaso2);
    this.wizard.goToNextStep();
  }


  clicNextPaso3(dataPaso3: any): void{
    console.log("clic paso 3");
    //console.log(dataPaso3);
    this.dataForm.set("Paso3",dataPaso3);
    for(let [key,value] of this.dataForm){
      let objJson = JSON.stringify(value, null, 2);
      console.log(`Formulario:${key} Datos:${objJson}`);
  }
    this.formComplete = true;
  }

  recargarForm(): void{
    window.location.reload();
  }
}