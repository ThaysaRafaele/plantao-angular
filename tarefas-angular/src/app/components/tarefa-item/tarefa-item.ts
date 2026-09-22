import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarefas } from '../../services/tarefas';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-tarefa-item',
  styleUrl: './tarefa-item.css',
  templateUrl: './tarefa-item.html',
})
export class TarefaItem {
    constructor(public tarefaService: Tarefas) {
  }

}
