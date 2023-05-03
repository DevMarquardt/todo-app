import { Component } from '@angular/core';

interface Tarefa{
  id: number
  nome: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  nome: string = '';
  tarefas: Tarefa[] = []
  proximoId = 1;

  tarefa={
    nome: ''
  }

  cadastrarTarefa(): void { 
    const novaTarefa: Tarefa = {
      id: this.proximoId,
      nome: this.tarefa.nome
    };
    this.tarefas.push(novaTarefa);
    this.proximoId++;
  }

  removerTarefa(id: number): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }

}