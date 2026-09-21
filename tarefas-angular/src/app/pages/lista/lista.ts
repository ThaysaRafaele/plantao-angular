import { Component } from '@angular/core';
import { TarefaItem } from '../../components/tarefa-item/tarefa-item';

@Component({
  imports: [TarefaItem],
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {}
