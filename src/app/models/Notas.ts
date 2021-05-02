export class Notas{
  
  Materia: string;
  Calificacion: number;
  Estado: boolean;

  constructor(Materia: string, Calificacion:number, Incrementar:number, Estado:boolean){
    this.Materia = Materia;
    this.Calificacion = Calificacion;
    this.Estado = Estado;
  }

}