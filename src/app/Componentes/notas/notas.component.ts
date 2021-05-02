import { Component, OnInit } from '@angular/core';
import { Notas } from 'src/app/models/Notas';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  ListNotas: Notas[] = [];
  Materia = '';
  Calificacion = 0;
  Validacion = false;
  ValidacionNulos = false;
  Validar = '';
  ValidarNulos = '';

  constructor() { }

  ngOnInit(): void {
  }

  AgregarNota(){
    this.Validar = '';
    this.ValidarNulos = '';
    this.Validacion = false;
    this.ValidacionNulos = false;

    if(this.Calificacion >= 0 && this.Calificacion <=100){

    if(this.Materia == null || this.Calificacion == 0){
      this.ValidarNulos = 'No se puede agregar valores nulos...';
      this.ValidacionNulos = true;
    }else{

    //Agrego los elementos de los inputs al array
    const nota:Notas = {
      Materia: this.Materia,
      Calificacion: this.Calificacion,
      Estado: false
    }

    //Pusheo esos elementos
    this.ListNotas.push(nota);

    //Reinicio los inputs
    this.Materia = '';
    this.Calificacion = 0;
    this.Validar = '';
    this.ValidarNulos = '';
    this.Validacion = false;;

    }

    }else{
      this.Validar = 'La nota no puede ser menor que 0, ní mayor que 100...';
      this.Validacion = true;
    }
  }

  EliminarNota(index: number) : void{
    this.ListNotas.splice(index, 1);
  }

}
