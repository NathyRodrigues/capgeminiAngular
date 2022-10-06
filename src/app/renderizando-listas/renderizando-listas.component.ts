import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})

export class RenderizandoListasComponent {
  celulares: Celular [] = [
    {id: 1, nome: "celular nokia", descricao: "um celular grande e antigo", esgotado: false},
    {id: 2, nome: "celular lg", esgotado: false},
    {id: 3, nome: "celular siemens", descricao: "um celular pequeno e antigo", esgotado: true},
  ]
}
