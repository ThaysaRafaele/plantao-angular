import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
