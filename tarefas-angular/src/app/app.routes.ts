import { Routes } from "@angular/router";
import { Lista } from "./pages/lista/lista";
import { NovaTarefa } from "./pages/nova-tarefa/nova-tarefa";
import { TarefaDetalhe } from "./pages/tarefa-detalhe/tarefa-detalhe";

export const routes: Routes = [
    {path: '', component: Lista},
    {path: 'nova-tarefa', component: NovaTarefa},
    {path: 'tarefa/:id', component: TarefaDetalhe }
];