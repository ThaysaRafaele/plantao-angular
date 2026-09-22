import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-tarefa-detalhe',
  styleUrl: './tarefa-detalhe.css',
  templateUrl: './tarefa-detalhe.html',
})
export class TarefaDetalhe {

  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
