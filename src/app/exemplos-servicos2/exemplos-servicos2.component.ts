import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplos-servicos2',
  templateUrl: './exemplos-servicos2.component.html',
  styleUrls: ['./exemplos-servicos2.component.css']
})
export class ExemplosServicos2Component {
  descricao = "";

  constructor (public logger: LoggerService) {}

  adicionarProduto(){
    this.logger.logar(`O produto com a descrição ${this.descricao} foi adicionado`);
  }
}