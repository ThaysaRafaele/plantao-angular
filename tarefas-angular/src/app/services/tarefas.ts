import { Injectable } from '@angular/core';

// @Service()
@Injectable({
    providedIn: 'root'
})
export class Tarefas {
    tarefas = [
        {titulo: 'Estudar Angular', concluida: false},
        {titulo: 'Assitir as vídeos aulas de Angular', concluida: false},
        {titulo: 'Fazer as tarefas de Angular', concluida: false},
        // {titulo: 'Verificar versão do Angular', concluida: false},
    ];

    marcarConcluida(tarefa: any) {
        tarefa.concluida = !tarefa.concluida;
    }
}
