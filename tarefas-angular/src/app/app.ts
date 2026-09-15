import { Component, signal } from '@angular/core';
import { TarefaItem } from './components/tarefa-item/tarefa-item';
import { CommonModule } from '@angular/common';


@Component({
  imports: [TarefaItem, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('tarefas-angular');
}
