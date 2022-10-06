import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})

export class SegundoComponenteComponent  {
 nome = "Tom";
 dataNascimento = "2015/01/01";
 urlImagem = "./assets/tom.jpg";

 mostrarDataNascimento() {
  alert (`A data de nascimento do Tom é: ${this.dataNascimento}`)
 }
}
